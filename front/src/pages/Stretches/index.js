import axios from 'axios';
import { Component } from 'react';
import { NavLink } from "react-router-dom";

// Components
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';

// Styles
import './styles.scss';
import { AiFillPlusCircle } from 'react-icons/ai';

export default class Stretches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stretches: [],
      categories: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/stretches').then((response) => {
      let stretches = response.data;
      this.setState({ stretches });
    });

    axios.get('http://localhost:3000/categories').then((response) => {
      let categories = response.data.reduce((acc, category) => {
        acc[category.id] = category.name;
        return acc;
      }, {});
      this.setState({ categories });
    });
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  filterData = () => {
    const { searchTerm } = this.state;
    return this.state.stretches.filter((rawdata) => {
      return rawdata.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  render() {
    const filterData = this.filterData();

    const stretchesByCategory = {};
    filterData.forEach((stretch) => {
      if (!stretchesByCategory[stretch.category_id]) {
        stretchesByCategory[stretch.category_id] = [];
      }
      stretchesByCategory[stretch.category_id].push(stretch);
    });

    return (
      <div className='Stretches'>
        <div>
          <Wrapper
            wrapperTitle='Tous nos étirements disponibles'
            wrapperDescription='Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus.'
          />
          <input
            type='search'
            name='search'
            id='searchInput'
            placeholder='Votre recherche...'
            value={this.state.searchTerm}
            onChange={this.handleSearch}
          />
        </div>
        {this.props.isAdmin ? (
                  <div className='add-container'>
                  <NavLink to="/new-stretch" className="add-stretch-btn"> <AiFillPlusCircle /> Ajouter un étirement </NavLink>
                  </div>
        ) : null}

        <main>
          
          <div className='stretches-container'>
            {Object.keys(stretchesByCategory).map((categoryId) => (
              <div key={categoryId} className='category'>
                <h2>{this.state.categories[categoryId]}</h2>
                <ul>
                  {stretchesByCategory[categoryId].map((stretch) => (
                    <Card
                      id={stretch.id}
                      title={stretch.title}
                      description={stretch.description}
                      img={stretch.main_image}
                      alt={stretch.title}
                      hover={stretch.title}
                      key={stretch.id}
                      link={stretch.id}
                      isLogged={this.props.isLogged}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}
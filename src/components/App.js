import React from 'react';
import unplashApi from '../api/unplashAPI';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async term =>{
        const response = await unplashApi.get('/search/photos',{
            params: { query: term },
        });
    
        this.setState({ images: response.data.results });
    }

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearch={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
             </div>);
    }
}

export default App;
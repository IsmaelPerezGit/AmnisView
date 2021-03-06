import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';
import Header from '../components/Header';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <Router history={history}>
                    <div>
                        <Header/>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" component={StreamCreate}/>
                        <Route path="/streams/edit/:id" component={StreamEdit}/>
                        <Route path="/streams/delete" component={StreamDelete}/>
                        <Route path="/streams/show" component={StreamShow}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
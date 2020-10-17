import React from 'react';
import Modal from '../Modal';
import {fetchStream, deletStream} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{
    
    componentDidMount(){
          this.props.fetchStream(this.props.match.params.id);
    }

    renderContent (){
        if(!this.props.stream)
        {
            return 'Are you sure you want to delete this stream';
        }
        
        return `Are you sure you want to delete this stream: ${this.props.stream.title}`;
    }
    
    renderActions() {
        const id = this.props.match.params.id;
        return (
            <>
                <button onClick = {() => this.props.deletStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </>
        );
    } 

    render(){
        return (
            <div>
            <Modal
             content = {this.renderContent()}
             renderActions = {this.renderActions()}
            />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream, deletStream})(StreamDelete);
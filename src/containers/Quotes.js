import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
               }
               {this.props.quotes.map((quote,id)=><QuoteCard key={id} quote={quote} remove={this.props.removeQuote} upVote={this.props.upvoteQuote} downVote={this.props.downvoteQuote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps ={
  removeQuote,
  upvoteQuote,
  downvoteQuote
}



// export default connect(mapStateToProps,{removeQuote,upvoteQuote,downvoteQuote})(Quotes);

export default connect(mapStateToProps,mapDispatchToProps)(Quotes);

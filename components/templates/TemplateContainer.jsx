import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import Component from './TemplateComponent';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));

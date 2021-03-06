/* eslint-disable no-undef,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HtmlView from '../../../components/HtmlView';

class SectionIntro extends Component {
  static componentName = 'SectionIntro';

  static propTypes = {
    slug: PropTypes.string.isRequired,
  };

  static defaultProps = {
    slug: '',
  };

  render() {
    return (<HtmlView domain={'desc'} slug={this.props.slug} />);
  }
}


const mapStateToProps = state => ({
  section: state.section,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionIntro);

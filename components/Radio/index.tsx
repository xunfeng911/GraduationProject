import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import './radio.css';

export default class RadioGroup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onChange = (e: any) => {
    this.props.onChange(e);
    this.setState({value: e.target.value});
  }
  labelClassName = (status: boolean) => {
    return classNames({
      'radio-label': true,
      'radio-label-checked': status
    });
  }
  render() {
    const {value} = this.state;
    const {name, radiosData} = this.props;
    return (
      <div className="radios">
        {radiosData.map((res: any, key: any) => (
          <label key={key} className={this.labelClassName(value === res.value)}>
            <input className="radio-input" type="radio" onChange={this.onChange} name={name} value={res.value}  />
            <span>{res.key}</span>
         </label>
        ))}
      </div>
    );
  }
}
// RadioGroup.propTypes = {
//   onChange: PropTypes.func,
//   value: PropTypes.any,
//   name: PropTypes.string,
//   radiosData: PropTypes.arrayOf( PropTypes.shape({
//     value: PropTypes.any,
//     key: PropTypes.any
//   }))
// }
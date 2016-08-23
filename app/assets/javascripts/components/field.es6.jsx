class Field extends React.Component {

  componentDidMount(){
    var options = this.props.schema.options;
    if(!options){return}
    let select = $(this.refs.field);
    select.selectize({
      persist: false,
      delimiter: ',',
      placeholder: this.placeholder(),
      create: this.props.schema.customOption,
      maxItems: this.props.schema.multipleOptions ? null : 1,
      onChange: this.handleChange.bind(this),
    })[0].selectize.setValue(this.props.schema.defaultValue || '', true)
  }

  placeholder(){
    return this.props.schema.placeholder || titleize(this.props.schema.name)
  }

  clear(){
    let field = this.refs.field
    if(this.props.schema.options){
      $(field)[0].selectize.setValue(this.props.schema.defaultValue || '')
    }
    else{
      field.value = this.props.schema.defaultValue || ''
    }
  }

  value(){
    return this.refs.field.value.trim()
  }


  handleChange(){
    if(callback = this.props.onChangeCallack){callback()}
  }

  render() {
    return this.renderField()
  }

  renderField(){
    if(this.props.schema.custom){return this.renderCustomField()}
    let field = this.props.schema.options ? this.renderSelect() : this.renderInput();
    if (label = this.props.schema.label){
      return <div><label>{label}</label>{field}</div>
    }
    else{
      return field
    }
  }

  renderSelect(){
    return(
      <select
        className={this.props.schema.className}
        ref="field"
        onChange={this.handleChange.bind(this)}
      >
        {this.renderOptions()}
      </select>
    )
  }

  renderInput(){
    return(
      <input
        className={this.props.schema.className}
        ref="field"
        onChange={this.handleChange.bind(this)}
        placeholder={this.placeholder()}
        type="text"
      />
    )
  }

  renderOptions(){
    return this.props.schema.options.map((option, index) => (
      this.renderOption(option, index)
    ))
  }

  renderOption(option, index){
    if(flatten([option]).length == 1){
      return <option key={index}>{option}</option>
    }
    else{
      return <option key={index} value={option[1]}>{option[0]}</option>
    }
  }

  renderCustomField(){
    return window[this.props.schema.field]
  }


}
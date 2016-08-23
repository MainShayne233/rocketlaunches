class Form extends React.Component{

  handleSubmit(){

  }

  render(){
    return(
      <form className="ui form">
        {this.renderFieldRow()}
        <div className="center">
          <button
            type="submit"
            className="ui button wide"
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderFieldRow(){
    return this.props.form_schema.map((field_row) =>(
      this.renderFields(field_row)
    ))
  }

  renderFields(row){
    return row.map((field, index) => (
      <div className="center"><Field schema={field}/></div>
    ))
  }

}
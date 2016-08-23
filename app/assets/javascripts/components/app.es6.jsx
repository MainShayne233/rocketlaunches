class App extends React.Component {

  render () {
    return(
      <div>
        <h1 className="center">Rocket Launches!</h1>
        <Form form_schema={this.props.form_schema}/>
      </div>
    );
  }
}


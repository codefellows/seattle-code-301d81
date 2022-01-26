import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';




class UpdateCatForm extends React.Component {

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    let catToUpdate = {
      color: e.target.color.value || this.props.color,
      hasClaws: e.target.hasClaws.checked || this.props.hasClaws,
      location: e.target.location.value,
      name: e.target.name.value || this.props.cat.name,
      __v: this.props.cat.__v,
      _id: this.props.cat._id
    };
    console.log(catToUpdate)
    this.props.updateCat(catToUpdate);

  }

render () {
return (
  <Container>
  <Form onSubmit={this.handleUpdateSubmit}>
    <Form.Group controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder={this.props.cat.name} />
    </Form.Group>
    <Form.Group controlId="color">
      <Form.Label>Color</Form.Label>
      <Form.Control type="text" placeholder={this.props.cat.color} />
    </Form.Group>
    <Form.Group controlId="location">
      <Form.Label>Location</Form.Label>
      <Form.Control type="text" placeholder={this.props.cat.location}/>
    </Form.Group>
    <Form.Group controlId="hasClaws">
      <Form.Check type="checkbox" label="has-claws" />
    </Form.Group>
    <Button type="submit">Add Cat</Button>
  </Form>

</Container>
);
}
}

export default UpdateCatForm;

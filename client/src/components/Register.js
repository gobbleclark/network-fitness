import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        favoriteOutdoor: "",
        favortiteIndoor: "",
        currentEmployer: "",
        currentPosition: "",
        nameSkills: "",
        nameInterests: "",
        password: "",
        passwordConfirmation: "",
    }



    handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, favoriteOutdoor,
            favortiteIndoor, currentEmployer, currentPosition,
            nameSkills, nameInterests, password, passwordConfirmation } = this.state;
        const { auth: { handleRegister, }, history, } = this.props;

        if (password === passwordConfirmation)
            handleRegister({
                firstName, lastName, email, favoriteOutdoor,
                favortiteIndoor, currentEmployer, currentPosition,
                nameSkills, nameInterests, password, passwordConfirmation
            }, history);
        else
            alert('Passwords Do Not Match!')
    }



    handleChange = (e) => {
        const { name, value, } = e.target
        this.setState({ [name]: value, });
    };



    render() {
        const { firstName,
            lastName,
            email,
            favoriteOutdoor,
            favortiteIndoor,
            currentEmployer,
            currentPosition,
            nameSkills,
            nameInterests,
            password,
            passwordConfirmation, } = this.state;
        return (

            <Segment>
                <Header as='h1' textAlign='center'> Register </Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        label="First Name"
                        required
                        autoFocus
                        name="firstName"
                        vaule={firstName}
                        placeholder="Gobble"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Last Name"
                        required
                        autoFocus
                        name="lastName"
                        vaule={lastName}
                        placeholder="Clark"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Email Address"
                        required
                        autoFocus
                        name="email"
                        vaule={email}
                        placeholder="typeyouremail@email.com"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Favorite Outdoor Activites"
                        required
                        autoFocus
                        name="favoriteOutdoor"
                        vaule={favoriteOutdoor}
                        placeholder="Hiking, Mountain Biking, Yoga, etc."
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Favorite Indoor Activities"
                        required
                        autoFocus
                        name="favortiteIndoor"
                        vaule={favortiteIndoor}
                        placeholder="Going to the gym, Basketball, Yoga, etc."
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Where do you currently work?"
                        required
                        autoFocus
                        name="currentEmployer"
                        vaule={currentEmployer}
                        placeholder="Google, Amazon, Adobe, etc."
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="What is your current position?"
                        required
                        autoFocus
                        name="currentPosition"
                        vaule={currentPosition}
                        placeholder="Operations Specialist, Coporate Recruiter, Graphic Designer, etc."
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="What are some of your top skills?"
                        required
                        autoFocus
                        name="nameSkills"
                        vaule={nameSkills}
                        placeholder="Project Management, Graphic Design, Software Development, etc. "
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="What are some of your interests?"
                        required
                        autoFocus
                        name="nameInterests"
                        vaule={nameInterests}
                        placeholder="Health and Wellness, Videography, Home Designer, etc."
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Password"
                        required
                        autoFocus
                        name="password"
                        vaule={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Password Confirmation"
                        required
                        autoFocus
                        name="passwordConfirmation"
                        vaule={passwordConfirmation}
                        placeholder="Password Confirmation"
                        onChange={this.handleChange}
                    />
                    <Segment textAlign='center' basic>
                        <Button primary type='submit'>Submit</Button>
                    </Segment>

                </Form>
            </Segment>
        )
    }
};


export default class ConnectedRegister extends React.Component {
    render() {
        return (
            <AuthConsumer>
                {
                    auth => <Register {...this.props} auth={auth} />}
            </AuthConsumer>
        )
    }
}


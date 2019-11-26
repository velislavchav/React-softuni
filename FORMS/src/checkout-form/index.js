import React, {Component} from 'react';

class CheckoutForm extends Component {
    constructor(props){
        super (props)

        this.state = {
            username: '',
            adress: '',
            city: '',
            iban: '',
            gender: '',
            terms: false,
            error: null
            
        }
    }

    changeAdress = e => {
        this.setState({
            adress: e.target.value
        })
    }

    changeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    changeIban = e => {
        this.setState({
            iban: e.target.value
        })
    }

    changeCity = e => {
        this.setState({
            city: e.target.value
        })
    }

    changeTerms = e => {
        this.setState({
            terms: e.target.checked
        })
    }

    changeGender = e => {
        this.setState({
            terms: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()
        const {  
            adress,
            username,
            city,
            iban,
            gender,
            terms} = this.state;

        if (username ===''){
            this.setState({
                error: 'Username is mandatory, bro'
            })
        } else {
            this.setState({
                error: null
            })
            console.log(this.state);
        }
    }

    render() {
        const {  
            adress,
            username,
            city,
            iban,
            error,
            terms} = this.state;

        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <lable htmlFor='username'>Username: </lable>
                    <input type='text' onChange={this.changeUsername} value={username} id='username'/>
                </div> 
                <div>
                    <lable htmlFor='adress'>Adress: </lable>
                    <input type='text' onChange={this.changeAdress} value={adress} id='adress'/>
                </div>
                <div>
                    <lable htmlFor='city'>City: </lable>
                    <select onChange={this.changeCity} value={city}>
                        <option value=''>Choose...</option>
                        <option value='Sofiq'>Sofiq</option>
                        <option value='Smolqn'>Smolqn</option>
                        <option value='Plovdiv'>Plovdiv</option>
                        <option value='Sliven'>Sliven</option>
                    </select>
                </div>
                <div>
                    <lable htmlFor='iban'>IBAN: </lable>
                    <input type='text' onChange={this.changeIban} value={iban}  id='iban'/>
                </div>
                <div>
                    <lable htmlFor='terms'>Terrms & Conditions:  </lable>
                    <input type='checkbox' onChange={this.changeTerms} selected={terms}/>
                </div>
                <div>
                    <lable htmlFor='terms'>Gender:  </lable>
                    Male:<input onChange={this.changeGender} name='gender' type='radio' value='male'/>
                    Female:<input onChange={this.changeGender} name='gender' type='radio' value='female'/>
                    Other:<input onChange={this.changeGender} name='gender' type='radio' value='other'/>
                </div>

                <button type='submit'>SUBMIT</button>
                {error ? 
                    (
                        <div>
                            {error}
                        </div>
                     ) : null
                }
            </form>
        )
    }

}

export default CheckoutForm;
import React from 'react';

const Header = (props) =>{
    /*
        Header component renders the header of IndecisionApp contain content
        such as App-name and sub-title.
    */
    return(
        <div className="header">
            <h1 className="brand-name">{props.state.brandName}</h1>
            <h4 className="subtitle">{props.state.subTitle}</h4>
        </div>
    );
}

class Action extends React.Component{
    /*
        Action component contain a button which will responsible to enabled modal
        with randomly choosen option from options list if option list is empty
        then button will be disabled.
    */
    constructor(props){
        super(props);
        this.handleChooserandomly = this.handleChooserandomly.bind(this);
    }
    handleChooserandomly(){
        const random = Math.floor(Math.random()*this.props.options.length);
        const option = this.props.options[random];
        alert(option);
        this.props.handleDeleteOption(option);

    }
    render(){
        return(
            <div className="action container">
                <button
                    className="action-button"
                    disabled={this.props.options.length>0?false:true}
                    onClick={this.handleChooserandomly}
                >
                    What should i do ?
                </button>
            </div>
        );
    }
}


class Options extends React.Component{
    /*
        Options component renders list of options and a <Option/> Component and
        RemoveAll button which will allow user to remove all option on one click
        and if all options list is empty.
    */
    render(){
        return(
            <div className="options container">
                {/*row*/}
                <div className="row header">
                    {/*col-1*/}
                    <div className="col">
                        <h3>Options</h3>
                    </div>
                    {/*col-1*/}

                    {/*col-2*/}
                    <div className="col">
                        <button
                            className="Removeall-button"
                            disabled={this.props.options.length>0?false:true}
                            onClick={this.props.handleRemoveAll}
                        >
                            RemoveAll
                        </button>
                    </div>
                    {/*col-2*/}
                </div>
                {/*row*/}

                {this.props.options.map((opt,index) =>{
                        return <Option option={opt} key={index} handleDeleteOption={this.props.handleDeleteOption}/>
                })}
            </div>
        );
    }
}

class Option extends React.Component{
    /*
        Option component will render a list item and remove button to delete
        options individualy.
    */
    constructor(props){
        super(props);

        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    handleDeleteOption(e){
        this.props.handleDeleteOption(e.target.attributes.value.value);
    }
    render(){
        return(
            <div className="container">
                <div className="row item">
                    <div className="col item-text">
                        {this.props.option}
                    </div>

                    <div className="col remove-item">
                        <button
                         onClick={this.handleDeleteOption}
                         value={this.props.option}>remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

class AddOption extends React.Component{
        /*
            AddOption Component render a input field and a button inside form
            tag which allow user to submit the text present in input field and
            if input field is empty then AppOption button will be diasbled.
        */
        constructor(props){
            super(props);

            this.handleFormValidation = this.handleFormValidation.bind(this);
            this.handleSubmitForm = this.handleSubmitForm.bind(this);

            this.state = {
                inputState:true,
                inputValue:'',
                errorDuplicateState:false,
                errorDuplicateMsg:''
            };
        }
        handleFormValidation(e){
            /*
              handleFormValidation method will validate the max-length of input field
              it should not grater then 100 characters if it exceeds it's max length then
              in input field should egnore entred characters above 100 and only considered
              100 or below characters input field contain .

              handleFormValidation method also check weather the input field contain atleast
              one character if it's length is grater then 0 then inputState set to true and
              if length is lesser then 1 then inputState set to false
             */
            if (e.target.value.length <= 100){
                    this.setState({
                        inputValue:e.target.value
                    });
            }

            if(e.target.value.length <= 0){
                this.setState({
                    inputState:true
                });
            }else{
                this.setState({
                    inputState:false
                });
            }
        }

        handleSubmitForm(e){
            /*
                handleSubmitForm method of Addoption class calls the handleSubmitForm method of
                IndecisionApp class and change the state of inputValue of Addoption Class
                which helps to make empty input field after submitting form.
            */
            const error = this.props.handleSubmitForm(e);
            this.setState({
                inputValue:''
            });

            if(error){
                this.setState({
                    errorDuplicateState:true,
                    errorDuplicateMsg:error
                });
            }else{
                this.setState({
                    errorDuplicateState:false,
                });
            }
        }

        render()
        {
            return(
                <div>
                    {!this.props.options.length?<h3> Enter some options</h3>:<h3></h3>}
                    {this.state.errorDuplicateState?<h3>{this.state.errorDuplicateMsg}</h3>:<h3></h3>}
                    <form onSubmit={this.handleSubmitForm}>
                        <input
                            name="option"
                            type="text"
                            placeholder="Enter some options"
                            onChange={this.handleFormValidation}
                            value={this.state.inputValue?this.state.inputValue:""}
                        />
                        <button
                        type="submit"
                        disabled={this.state.inputState}
                        >AddOption</button>
                    </form>
                </div>
            );
        }
}


class IndecisionApp extends React.Component{
    /*
        Indecision component render all the components which are parts of
        IndecisionApp such as Header , Action , Options , AddOption and holds
        the state of the app.
    */
    constructor(props){
        super(props);

        this.state = {
            brandName:"IndecisionApp",
            subTitle:"Allow computer to select your next task.",
            options:["first","second"]
        };

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    handleRemoveAll(){
        /*
            handleRemoveAll method will remove all options present in side
            state.options
        */
            if(this.state.options){
                    this.setState({
                        options:[]
                    });
            }
    }

    handleSubmitForm(e){
        /*
            handleSubmitForm method will concatinate the value form the input field
            to options array
        */
        e.preventDefault();
        const value = e.target.elements.option.value;
        if(e.target.elements.option.value){
            if(this.state.options.indexOf(value) === -1){
                this.setState((prevState) => {
                 return{options:prevState.options.concat([value])};
                });
            }
            else{
                return "Duplicate option are not allowed"
            }
        }
    }

    handleDeleteOption(optionToRemove){
        /*
            handleDeleteOption method will delete the individual option from the
             options array
        */
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((opt)=> optionToRemove !== opt)
            };
        });

    }

    render(){
        return(
            <div>
                <Header
                    state={this.state}
                />
                <Action
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    options={this.state.options}
                    handleSubmitForm={this.handleSubmitForm}
                />
            </div>
        );
    }
}


export default IndecisionApp;

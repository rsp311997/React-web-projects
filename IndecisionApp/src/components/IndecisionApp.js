import React from 'react';

const Header = (props) =>{
    /*
        Header component renders the header of IndecisionApp contain content
        such as App-name and sub-title.
    */
    return(
        <div>
            <h1>{props.state.brandName}</h1>
            <h4>{props.state.subTitle}</h4>
        </div>
    );
}

class Action extends React.Component{
    /*
        Action component contain a button which will responsible to enabled modal
        with randomly choosen option from options list if option list is empty
        then button will be disabled.
    */
    render(){
        return(
            <div>
                <button>What should i do ?</button>
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
            <div>
                <button>RemoveAll</button>
                <ul>
                    {this.props.options.map((opt,index) =>{
                        return <Option option={opt} key={index}/>
                    })}
                </ul>
            </div>
        );
    }
}

class Option extends React.Component{
    /*
        Option component will render a list item and remove button to delete
        options individualy.
    */
    render(){
        return(
            <div>
                <li>
                    {this.props.option}
                    <button>remove</button>
                </li>
            </div>
        );
    }
}


class AddOption extends React.Component{
        /*
            AddOption Component render a input field and a button which allow
            user to submit the text present in input field and if input field is
            empty then AppOption button will be diasbled.
        */
        render()
        {
            return(
                <div>
                    <input type="text" placeholder="Enter some options" />
                    <button>AddOption</button>
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
    }

    render(){
        return(
            <div>
                <Header state={this.state} />
                <Action />
                <Options options={this.state.options}/>
                <AddOption />
            </div>
        );
    }
}


export default IndecisionApp;

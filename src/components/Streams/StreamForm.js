import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderError  =(meta) => {
        if(meta.error && meta.touched)
        {
            return (
                <div className = "ui error message">
                    <div className = "header">{meta.error}</div>
                </div>
            );
        }
    };

    renderInput = (formProps) => {
        return (
            // <input 
            //     onChange = {formProps.input.onChange}
            //     value = {formProps.input.value}
            // />
            <div>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    onSubmit = (formValues) =>
    {
       this.props.onSubmit(formValues);
    };
    
    render(){
           return (
           <form className = "ui form error" onSubmit = {this.props.handleSubmit(this.onSubmit)}>
               <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
               <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
               <button className = "ui button primary">Submit</button>
           </form>
           ); 
    }
}

const validate = (formValues) =>{
    const errors = {};

    if(!formValues.title)
    {
        errors.title = "You must enter a title";
    }

    if(!formValues.description){
        errors.description = "You must enter description";
    }

    return errors;
};


export default reduxForm({
    form : 'streamForm',
    validate: validate
})(StreamForm);


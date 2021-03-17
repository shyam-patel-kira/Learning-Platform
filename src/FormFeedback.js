import React from 'react'

class FormFeedback extends React.Component(){
    constructor(props) {
        super(props);
        this.state = {
            subject:"",
            author:"",
            content:"",
            email:""
        }
    }

    onChangeAuthor = (event) => {
        this.setState({
            author:this.state.author
        })
    }

    onChangeSubject = (event) => {
        this.setState({
            subject:this.state.subject
        })
    }

    onChangeContent = (event) => {
        this.setState({
            content:this.state.content
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            email:this.state.email
        })
    }

    feedBackSubmit = (event) => {
        event.preventDefault();
        const feedback = {
            subject: this.state.subject,
            author: this.state.author,
            content: this.state.content,
            email: this.state.email
        }
        console.log(feedback)

        axios.post('http://localhost:8000/feedback',feedback)
            .then(res => console.log(res.data))

    }

    render(){
        return(
            <div className='form-content-right'>
            <form className='form'>
                <h1>Give your Feedback Here</h1> 
                <div className='form-inputs'>
                    <label htmlFor='author' className='form-label'>
                    </label>
                    <input 
                        id='author'
                        type='text'
                        name='author'
                        className='form-input'
                        placeholder='Enter your Name'
                        value={this.state.author}
                        onChange={this.onChangeAuthor}
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='subject' className='form-label'>
                    </label>
                    <input 
                        id='subject'
                        type='text'
                        name='subject'
                        className='form-input'
                        placeholder='Subject'
                        value={this.state.subject}
                        onChange={this.onChangeSubject}
                    />
                </div>


                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                    </label>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your Email'
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='content' className='form-label'>
                    </label>
                    <input 
                        id='content'
                        type='text'
                        name='content'
                        className='form-input'
                        placeholder='Your Feedback or Query'
                        value={this.state.content}
                        onChange={this.onChangeContent}

                    />
                </div>

                <button className='form-input-btn'
                        type='submit'
                        onClick={this.feedBackSubmit}
                >
                    submit
                        </button>
            </form>
        </div>


    )

    }
}

export default FormFeedback

import React from 'react'
import { Form, Field } from 'react-final-form'
import classes from './Login.module.css'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(2300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Login = () => (
  <>
  <h1>Sign In</h1>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = 'Required' 
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        if (!values.confirm) {
          errors.confirm = 'Required'
        } else if (values.confirm !== values.password) {
          errors.confirm = 'Must match'
        }
        return errors
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>

          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span  className={classes.error}>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span  className={classes.error}>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label>Password confirm</label>
                <input {...input} type="password" placeholder="Confirm" />
                {meta.error && meta.touched && <span  className={classes.error}>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </>
)
export default Login;
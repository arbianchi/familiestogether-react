import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return(
      <div id="DIV_1">
      	<form id="FORM_2">
      		<h2 id="H2_3">
      			Please Sign In
      		</h2> 
      		<label for="inputEmail" id="LABEL_4">
      			Email address
      		</label>
      		<input type="email" id="INPUT_5" placeholder="Email address" /> 
      		<label for="inputPassword" id="LABEL_6">
      			Password
      		</label>
      		<input type="password" id="INPUT_7" placeholder="Password" />
      		<div id="DIV_8">
      			 
      			<label id="LABEL_9">
      				<input type="checkbox" value="remember-me" id="INPUT_10" /> Remember me
      			</label>
      		</div> 
      		<button type="submit" id="BUTTON_11">
      			Sign in
      		</button>
      	</form>
      </div>
    );
  }
}
import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return(
      <div id="DIV_1">
      	<form id="FORM_2" action="/users/sign_in" method="post">
      		<input name="utf8" type="hidden" value="✓" id="INPUT_3" />
      		<input type="hidden" name="authenticity_token" value="vG6OZ5iWMYr+ekNT2ZUIv6d/DHrkUUnZGDX+VOGmeYPyJzBCewU/DQ6l+o2WTwwXA5OXKDX/DglTPGrgqvDFYg==" id="INPUT_4" />
      		<h3 id="H3_5">
      			Sign in
      		</h3>
      		<div id="DIV_6">
      			 <a href="/users/sign_up" id="A_7">Sign up</a> 
      			<label for="user_email" id="LABEL_8">
      				Email
      			</label>
      			<input type="email" name="user[email]" id="INPUT_9" />
      		</div>
      		<div id="DIV_10">
      			 <a href="/users/password/new" id="A_11">Forgot password?</a> 
      			<label for="user_password" id="LABEL_12">
      				Password
      			</label>
      			<input type="password" name="user[password]" id="INPUT_13" />
      		</div>
      		<input type="submit" name="commit" value="Sign in" id="INPUT_14" />
      		<div id="DIV_15">
      			 
      			<label id="LABEL_16">
      				<input name="user[remember_me]" type="hidden" value="0" id="INPUT_17" />
      				<input type="checkbox" value="1" name="user[remember_me]" id="INPUT_18" /> Remember me
      			</label>
      		</div>
      	</form>
      </div>
    );
  }
}
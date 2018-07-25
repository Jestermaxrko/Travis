"# pixelistic_be" 

To register users server recieves object like this: 
<pre>{
	nickname: 
	email:
	password:
	passwordConf:
}
</pre>
After successfull registration user object is:  
<pre>{
	_id:
	nickname: 
	email:
	password:
	passwordConf:
	isAdmin:
}
</pre>

In case of succes login or register server sends user object
In case of error - error object

To get user object: <strong>response.user</strong>;
To get error : <strong>response.error</strong>;


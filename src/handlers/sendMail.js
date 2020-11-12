import AWS from 'aws-sdk';

const ses = new AWS.SES({region: 'eu-west-1'});

async function sendMail(event, context) {
  const params = {
  	Source: 'saideepesh000@gmail.com',
  	Destination:{
  		ToAddresses: ['sai.deepesh.t@gmail.com'],
  	},
  	Message:{
  		Body:{
  			Text:{
  				Data: 'HI FROM DEEPESH',
  			},
  		},
  		Subject:{
  			Data: 'Test Mail',
  		},
  	},
  };

  try{
  	const res = await ses.sendEmail(params).promise();
  	console.log(res);
  	return res;
  }catch(err){
	console.error(err);
  }

}

export const handler = sendMail;



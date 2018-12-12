var config = {
    //url to be used in link generation
    url: '/api',
	
    //server details
    server: {
        host:   '0.0.0.0',
        port:   process.env.PORT || 8000
    },
    'mailgun': {
        'username': 'api',
        'domain': 'taskoli.com',
        'key': process.env.MAILGUN_API_KEY || 'key-4a1532a86df9e2595b5fe6345a352f6c',
        'public_key': process.env.MAILGUN_PUBLIC_KEY || 'pubkey-e2b73cea796da1ffdcd3ec228de75f57',
        'sendFrom': 'Taskoli',
        'sendFromEmail': 'no-reply@taskoli.com'
    }
};

module.exports = config;
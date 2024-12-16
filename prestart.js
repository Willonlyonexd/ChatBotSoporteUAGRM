const { execSync } = require('child_process');

if (process.env.NODE_ENV !== 'production') {
    try {
        execSync('npx eslint . --no-ignore', { stdio: 'inherit' });
    } catch (err) {
        console.error('ESLint failed:', err.message);
        process.exit(1);
    }
} else {
    console.log('Skipping ESLint in production.');
}

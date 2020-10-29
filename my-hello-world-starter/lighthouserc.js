module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:8000/'],
            startServerCommand: 'rails server -e production',
          },
        assert: {
            preset: 'lighthouse:recommended',
          },
        upload: {
            target: 'ci-test/lhci',
        },
    },
  };
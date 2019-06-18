fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1811/lizAsbell/smoothies')
.then(response => response.json())
.then(data => data.smoothies)
.then(smoothies => appendSmoothies(smoothies))

function appendSmoothies(smoothies) {
  smoothies.forEach(function(smoothie) {
    $('article').append(`<p>${smoothie.name}</p>`)
  })
}

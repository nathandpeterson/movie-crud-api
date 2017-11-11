
exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {id: 1, title: 'Blade Runner',
        year: 1982,
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        image_url: 'https://www.heyuguys.com/images/2016/10/Blade-Runner-2.jpg',
        rating: 9},
        {id: 2, title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
        plot: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.`,
        image_url: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg',
        rating: 10},
        {id: 3, title: 'Gattaca', year: 1997, plot: 'A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.', image_url: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/0/21//gattaca-main.jpg', rating: 7},
        {id: 4, title: 'The Matrix', year: 1999, plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', image_url: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/matrix_reboot_1000-630x400-1.jpg', rating: 8},
        {id: 5, title: '2001: A Space Odyssey', year: 1968, plot: 'Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.', image_url: 'https://nerdist.com/wp-content/uploads/2016/04/2001spaceodyssey_1.jpg', rating: 9},
        {id: 6, title: 'Alien', year: 1979, plot: 'After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.', image_url: 'http://media2.intoday.in/indiatoday/images/stories/alien-story_647_051217041336.jpg', rating: 7},
        {id: 7, title: 'Spaceballs', year: 1987, plot: 'It has a plot?', image_url: 'https://nerdist.com/wp-content/uploads/2015/12/spaceballs-970x543.jpg', rating: 7},
        {id: 8, title: 'Serenity', year: 2005, plot: 'The crew of the ship Serenity try to evade an assassin sent to recapture one of their members who is telepathic.', image_url: 'http://halfguarded.com/wp-content/uploads/serenity.jpg', rating: 8}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`
      )
    })
  }

export interface ElementContent {
  title: string;
  description: string[] | string;
  cta?: {
    title: string;
    url: string;
  };
}

export const contentData: Record<string, ElementContent> = {
  "mulholland-drive": {
    title: "Mulholland Drive (2001)",
    description: [
      "David Lynch's passing affected me personally. When a director reaches a certain (auteur) level, they tend to live in the clouds. They are overly intellectual and inaccessible.",
      "But with each great film, as Lynch's artistry rose, he become more accessible. During the pandemic, his readouts of the weather brightened my day. In his short film <em>What Did Jack Do?</em>, he pokes fun at film noir (and himself).",
      "I watched <em>Mulholland Drive</em> a few days after his passing, in a packed IFC Center. Everyone clapped and shed a tear when the opening credits read <em>Directed by David Lynch</em>. Initially I was frustrated with the Maltese Falcon-esque plot. Around the time of the Silencio scene, I gave in to this spritual experience.",
      "RIP my guy, the best to ever do it 💙"

    ],
    cta: {
      title: "View on Letterboxd",
      url: "https://letterboxd.com/film/mulholland-drive/"
    }
  },
  "between-scenes-website": {
    title: "Published my blog!",
    description: [
      "I am happy to share my website <em>Between Scenes</em>. I plan to use this website to share long form articles and essays.",
      "I aim to make arthouse and independent films more accessible. In an era where cinema feels increasingly commoditized, we have a responsibility to champion directors and performers who resist the traps of conveyor-belt filmmaking.",
      "My first long essay is out -- It is a list of 20 short films, each under 20 minutes. This is for my friends who complain about my recommendations being too long. Enjoy!"
    ],
    cta: {
      title: "Read My First Post",
      url: "https://betweenscenes.blog/essays/20-short-films"
    }
  },
  "metrograph-issue-1": {
    title: "Metrograph Issue 1",
    description: [
      "Since I moved to New York in 2021, I've frequented the Metrograph theater every other week. I love their programming, their graphic design, and their culture.",
      "Issue 1 is their first print publication and it is <strong> beautiful </strong>. It features interviews (notably with Clint Eastwood, Mark Lee Ping Bing, and Ed Lachman. It also has a list of film locations around the lower East Side that I'm obsessed with.",
      "The magazine itself is so well designed. If you're a fan of film, design or culture, it's worth a read!"
    ],
    cta: {
      title: "View Issue",
      url: "https://metrograph.com/magazine-issue-1/"
    }
  },
  "cinenerdle": {
    title: "Cinenerdle",
    description: [
      "Cinenerdle is an online game where cinephiles can challenge each other in live battles.",
      "The game mechanics are in particular super interesting. You cannot communicate with your opponent except through the films you choose. Most of the time I try to destroy my oppnent, but sometimes I realize I vibe with their taste and try to extend the game.",
      "So aside from trying to win, it's fun to communicate through names of films. It's common practice to end with <em>GG: Good Game</em> to congratulate your opponent. This one time I went 80 rounds with someone who might be my soulmate. We exhausted Hou Hsiao-hsien's filmography, Claire Denis, and Kelly Reichardt. Is this a <em>Before Sunrise</em> situation? "
    ],
    cta: {
      title: "Try it out",
      url: "http://cinenerdle2.app/"
    }
  },
  "directors-stack": {
    title: "Excited for 2025!",
    description: [
      "In 2025, so many directors I like will make new films. Here are the ones I'm looking forward to:",
      "<strong>Kelly Reichardt</strong>: Many of you know I am a certified fanboy. She is making an ART HEIST FILM. Starring John Magaro, Josh O'Connor, and Alana Haim??? Pl accept my venmo.",
      "<strong>Spike Lee</strong>: Imagine if a director you like does a remake of another director you like? Spike Lee is doing his spin on Kurosawa's <em> High and Low</em> and calling it <em>Highest 2 Lowest</em>, featuring Denzel!",
      "<strong>Chloé Zhao</strong>: She is adapting Shakespeare with Paul Mescal and Jessie Buckley!!!",
      "<strong>Richard Linklater</strong>:He is making <em>Nouvelle Vague</em> about the French New Wave.",
      "<strong>Bong Joon-ho</strong>: <em>Mickey 18</em> with R-Patz!",
      "<strong>Lynne Ramsay</strong>: <em>Die, My Love</em> with R-Patz!",
      "<strong>Park Chan-wook</strong>: I don't even know what he is doing, but the potential of him directing Son ye-jin (of Crash Landing on You) is too good to pass up.",
      "<strong>Kathryn Bigelow</strong>: A thriller? With Idris Elba and Rebecca Ferguson? Yes please.",
      "<strong>Jim Jarmusch</strong>: He's back! With Cate Blanchett and Vicky Krieps and Adam Driver!",
      "<strong>Some guy</strong>: Mission Impossible: The Last Reckoning. This will be the greatest finale of all time. (Should you choose to accept)"
      

    ],
    cta: {
      title: "More on the Film Stage",
      url: "https://thefilmstage.com/the-100-most-anticipated-films-of-2025-part-two/"
    }
  },
  "playtime": {
    title: "The World of Jacques Tati",
    description: [
      "<em>Playtime</em> by Jacques Tati is my single favorite film of all time.",
      "While he is not exactly an unknown, I do think he deserves more attention, especially when he is referenced so prominently by Wes Anderson.",
      "I have started going through his entire filmography, and got some exciting books that describe all his work! New blog coming out soon!"
    ],
    cta: {
      title: "See my Letterboxd Review",
      url: "https://letterboxd.com/n0rbuu/film/playtime/1/"
    }
  },
  "about-page": {
    title: "I'm trying out something new!",
    description: [
      "Between Scenes is a film blog and newsletter by <a href='https://letterboxd.com/n0rbuu/'>n0rbuu</a>.",
      "I wanted to try a bulletin board metaphor to share a monthly update, inspired by the Film Forum Theater in New York.",
      "Hope you enjoy this! Check out my <a href='https://betweenscenes.blog'>website</a> for longer form content. And email me at <a href='mailto:newsletter@betweenscenes.blog'>newsletter@betweenscenes.blog</a> for any comments or questions."
    ],
    cta: {
      title: "Visit Website",
      url: "https://betweenscenes.blog"
    }
  }
}; 
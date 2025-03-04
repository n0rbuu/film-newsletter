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
      title: "Watch on Criterion",
      url: "https://www.criterionchannel.com/mulholland-dr"
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
      title: "Visit Website",
      url: "https://betweenscenes.blog"
    }
  },
  "metrograph-issue-1": {
    title: "Metrograph Issue 1",
    description: [
      "Since I moved to New York in 2021, I've frequented the Metrograph theater every other week. I love their programming, their graphic design, and their culture.",
      "Issue 1 is their first print publication and it is <strong> beautiful </strong>. It features interviews (notably with Client Eastwood, Mark Lee Ping Bing, and Ed Lachman. It also has a list of film locations around the lower East Side that I'm obsessed with.",
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
  }
}; 
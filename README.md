# MOMO

MOMO is an app for everyone but it was especially designed for the commuters of Queens, NY. Commuters are always on the go. For some people, the only time they have to themselves is when they're underground in the subway. I wanted to take advantage of those moments, when there is limited to no internet connection, and provide a simple self-care tool that could be used in small public spaces like the subway or bus.

MOMO sessions use sound frequencies to soothe your nervous system. To begin a session, all you have to do is answer 1-2 simple questions. That's also the only time you're ever really required to look at the screen. After starting your session, there are optional breathing and reflexology exercises that can also be done. Nearly all exercises can be comfortably done without disturbing the person right next to you (subway & bus friendly).

<img width="809" alt="Screenshot 2023-10-25 at 4 30 29 PM" src="https://github.com/jazfeijoo/Momo/assets/61634471/fc7101b3-10db-4ed3-b7de-2adc7d77018c">


## How It's Made

**Tech used:**\
React Native: framework for mobile apps\
i18next: framework for internationization\
Expo: for testing in real time and quick starting the app\
React Navigation: for navigating between screens\
React Native Paper: framework for components (standard-compliant Material Design)\
React Native Material UI: framework for components (standard-compliant Material Design)\
Expo-Audio: library for playing audio

## Getting Started

**Building:**
npm install

**Quick Start:**
npx expo start

## Next Steps

- Add duration option screen before routing to Session screen
- Add timers for each session, then re-route to EndSession screen
- Create EndSessionScreen (end session final audio/sound to signal end of each session)
- Play music according to selected duration
- During session option: add 2-3 breathing exercise options
- During session option: add reflexology exercises
- Improve current translations 
- Add additional languages: Bengali, Korean

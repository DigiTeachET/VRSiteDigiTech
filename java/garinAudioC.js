AFRAME.registerComponent('songplayer1', {
  init: function() {
    let audiosource = document.querySelector('#track1');
    let musicplay = () => {
      audiosource.components.sound.playSound()
    }
    this.el.addEventListener('click', musicplay);
  }
});
AFRAME.registerComponent('songstopper1', {
  init: function() {
    let audiosource = document.querySelector('#track1');
    let musicstop = () => {
      audiosource.components.sound.stopSound()
    }
    this.el.addEventListener('click', musicstop);
  }
});
AFRAME.registerComponent('songplayer3', {
  init: function() {
    let audiosource = document.querySelector('#track3');
    let musicplay = () => {
      audiosource.components.sound.playSound()
    }
    this.el.addEventListener('click', musicplay);
  }
});
AFRAME.registerComponent('songstopper3', {
  init: function() {
    let audiosource = document.querySelector('#track3');
    let musicstop = () => {
      audiosource.components.sound.stopSound()
    }
    this.el.addEventListener('click', musicstop);
  }
});

AFRAME.registerComponent('songplayer2', {
  init: function() {
    let audiosource = document.querySelector('#track2');
    let musicplay = () => {
      audiosource.components.sound.playSound()
    }
    this.el.addEventListener('click', musicplay);
  }
});
AFRAME.registerComponent('songstopper2', {
  init: function() {
    let audiosource = document.querySelector('#track2');
    let musicstop = () => {
      audiosource.components.sound.stopSound()
    }
    this.el.addEventListener('click', musicstop);
  }
});
AFRAME.registerComponent('songplayer5', {
  init: function() {
    let audiosource = document.querySelector('#track5');
    let musicplay = () => {
      audiosource.components.sound.playSound()
    }
    this.el.addEventListener('click', musicplay);
  }
});
AFRAME.registerComponent('songstopper5', {
  init: function() {
    let audiosource = document.querySelector('#track5');
    let musicstop = () => {
      audiosource.components.sound.stopSound()
    }
    this.el.addEventListener('click', musicstop);
  }
});
AFRAME.registerComponent('songplayer6', {
  init: function() {
    let audiosource = document.querySelector('#track6');
    let musicplay = () => {
      audiosource.components.sound.playSound()
    }
    this.el.addEventListener('click', musicplay);
  }
});
AFRAME.registerComponent('songstopper6', {
  init: function() {
    let audiosource = document.querySelector('#track6');
    let musicstop = () => {
      audiosource.components.sound.stopSound()
    }
    this.el.addEventListener('click', musicstop);
  }
});




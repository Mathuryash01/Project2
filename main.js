window.addEventListener('load', function () {
  const musicPhoto = document.getElementById('music-photo');
  const audio = document.getElementById('audio');
  const seekBar = document.getElementById('seek-bar');
  const playPauseButton = document.getElementById('play-pause');
  const backwardButton = document.getElementById('backward');
  const forwardButton = document.getElementById('forward');
  const loopButton = document.getElementById('loop');
  const lyricsDiv = document.getElementById('lyrics');

  let isPlaying = false;
  let currentMusicIndex = 0;

  const musicList = [
      {
          src: 'song1.mp3',
          photo: 'photo1.jpg',
          lyrics: `Sehli Poori Lean Mile
Rajj’ke Shaukeen Mile
Bhavein Thodi Mean Mile
Pher Kamm Set Aa

Landi Ek Jeep Kaali
Hove Ni Speed 40
Beat Intense Wali
Pher Kamm Set Aa

Adhiye Nu Dubb Chon Kaddeya
Thekeyo Lai Khaara Ni
Jeep Di Hood Ton Jatt Ne
Maareya Lalkara Ni
Jeep Di Hood Ton Jatt Ne

Gall Sunn Mithe Mithe Gaane Na Suna
Chakkvi Beat Laade Vairi Nu Bula
Naal Aa Naal Aa Ni Jatt De Pra
Karde Karde Ni Dauleyan Di Chhaan

Ho Khadd’ja Ni Khadd’ja Jatt De
Muhron Na Langhi Ni
Kach Varga Lakk Tidak Ju
Gabbru Aa Jungi Ni

Ho Jhakkhad Aa Ohda Munda
Kar Lai Tu Baada Ni
Jeep Di Hood Ton Jatt Ne
Maareya Lalkaara Ni
Jeep Di Hood Ton Jatt Ne

Zor Zor Zor Dolan Masal Pure
Aivein Kari Na Koyi Chaud
Ke Dimag Set Ni

Mar Jayega Karta Vibe Check Ve
Vajja Lafda Te Kan Karu Sa Sa Sa
Pind Ch Khadak Sunn Thaa Thaa Thaa
Phir Jodega Tu Hath Latta Chakk Jawega
Sau Meter Ni Bhajkna Te Thak Jawega

Khadiye Dass Yaar Tere Di
Madaasa Kass Leya Ni
Sochi Na Thanda Pai Gaya
Thoda Jeha Hans Leya Ni

Kehnde Dosanjha Wala
Jihne Kar Vass Leya Ni
Geet Teri Taur Ne Sutteyan
Raj Ne Chakk Leya Ni

Yaar Ni Chadhju Sir Nu
Chadhta Jiwe Para Ni
Jeep Di Hood Ton Jatt Ne
Maareya Lalkara Ni
Jeep Di Hood Ton Jatt Ne

Gall Sunn Mithe Mithe Gaane Na Suna
Chakkvi Beat Laade Vairi Nu Bula
Naal Aa Naal Aa Ni Jatt De Pra
Karde Karde Ni Dauleyan Di Chhaan`
      },
      {
          src: 'song2.mp3',
          photo: 'photo2.jpg',
          lyrics: `Nakhro Badaami
Ek Laat Vargi
Kinne Si Main Dekhe
Haaye Halaak Kar Gayi

Kinneyan De Dil’an
Te Chala Gayi Aariyan
Jadon Jaandi Jaandi
Mere Naal Gall Kar Gayi

Kardi Si Pata
Hath Utte Time Da
Door Jaandi Dekh Mera
Dil Sheham Da

Kehndi Mainu Mere Kolon
Hath Jeha Chhuda ke
Hunn Jaande Ho Gaye 9:45

Oye Hoye Ni Tu Sohni Baahli
Karda Dil Milan Nu Kaali
Kahton Tu Dardi Kudiye
La Layi Mere Naal Je Yaari

Oye Hoye Ni Tu Sohni Baahli
Karda Dil Milan Nu Kaali
Kahton Tu Dardi Kudiye
La Layi Mere Naal Je Yaari

Khich’di Tu Selfie
Apple Phone Te
Bann Gaye Ne Tattoo
Teri Gori Dhaun Te

Dhayan Naal Wine Da
Glass Phad’di
Kehndi Launa Nai Main Daag
Koyi Louis Vuitton Te

Deed Ohdi Hoshan Nu Bhulaundi
Kehndi Nakhro Main
Rooh Tainu Chaundi

Baakiyan Nu Laave Laare
Mainu Na Koyi Laun’di
Dekh Mainu Hans Deyan
Jaave Sharmaundi

Baahla Jad Si Paya Raula
Dil Ki Ohda Hoya Haula
Dil Ki Ohda Hoya Haula
Udd Gayi Ohde Mukh Di Lali

Oye Hoye Ni Tu Sohni Baahli
Karda Dil Milan Nu Kaali
Kahton Tu Dardi Kudiye
La Layi Mere Naal Je Yaari

Oye Hoye Ni Tu Sohni Baahli
Karda Dil Milan Nu Kaali
Kahton Tu Dardi Kudiye
La Layi Mere Naal Je Yaari

Oye Hoye Ni Tu Sohni Baahli
Karda Dil Milan Nu Kaali
Kahton Tu Dardi Kudiye
La Layi Mere Naal Je Yaari`
      },
      
        {
          src: 'song3.mp3',
          photo: 'photo3.jpg',
          lyrics: `Pehle Bhi Main Tumse Mila Hoon
      Pehli Dafa Hi Milke Laga
      Toone Chhua Zakhmon Ko Mere
      Marham Marham Dil Pe Laga
      
      Paagal Paagal Hain Thode
      Baadal Baadal Hain Dono
      Khul Ke Barse Bheege Aa Zara
      
      Pehle Bhi Main Tumse Mila Hoon
      Pehli Dafa Hi Milke Laga
      Toone Chhua Zakhmon Ko Mere
      Marham Marham Dil Pe Laga
      
      Ho Ho Ho Ho…
      
      Ghalat Kya Sahi Kya
      Mujhe Na Pata Hai
      Tumhein Agar Pata Ho
      Bata Dena
      
      Main Arse Se Khud Se
      Zara Laapata Hoon
      Tumhein Agar Milun Toh
      Pata Dena
      
      Kho Na Jaana Mujhe
      Dekhte Dekhte
      
      Tu Hi Zariya
      Tu Hi Manzil Hai
      Ya Ke Dil Hai
      Itna Bata
      
      Toone Chhua Zakhmon Ko Mere
      Marham Marham Dil Pe Laga
      
      Paagal Paagal Hain Thode
      Baadal Baadal Hain Bheege
      Barse Barse Bheege Aa Zara
      
      Pehle Bhi Main Tumse Mila Hoon
      Pehli Dafa Hi Milke Laga
      Toone Chhua Zakhmon Ko Mere
      Marham Marham Dil Pe Laga
      
      Ho Ho Ho Ho…`
      },
      {
        src: 'song4.mp3',
        photo: 'photo4.jpg',
        lyrics: `Ho… Oh…
    O teri ankhon mein
    Ikraar ki baaton mein
    Bhigee
    bhigee raaton mein mujhko hai kho jana
    Nazron mai basake
    Palkon mai sajake
    Mehke
    mehkee saason se dil mein hai basana
    
    Oh…
    Teri baaton mai aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mai aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Payal ki rumjhum mein
    Geeton ki gungun mein
    Meethe
    meethe nagmon se tuj ko hai lubhana
    Seedhi
    saadhi baaton se
    Bholi
    bhaali adaon se
    Kache
    kache dhage se tumhe keech lana
    
    Oh…
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Pani ki lehron se
    Pavan ke jhonke se
    Pyasee
    pyasee boondon se hai teri maang sajana
    Kuch tumne kaha kuch maine kaha
    Kuch tumne kaha kuch maine kaha
    Do dil mil hee gaye ek jadoo chala
    Ek jadoo chala
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya
    Teri baaton mein aisa uljha jiya
    Bethe he bethe maine dil kho diya`
    },
    
  ];

  function loadMusic(index) {
      audio.src = musicList[index].src;
      musicPhoto.src = musicList[index].photo;
      isPlaying = true;
      playPauseButton.classList.remove('fa-play');
      playPauseButton.classList.add('fa-pause');
      audio.play();
      displayLyrics(index);
  }

  function displayLyrics(index) {
      lyricsDiv.textContent = musicList[index].lyrics;
  }

  function togglePlayPause() {
      if (isPlaying) {
          audio.pause();
          isPlaying = false;
          playPauseButton.classList.remove('fa-pause');
          playPauseButton.classList.add('fa-play');
      } else {
          audio.play();
          isPlaying = true;
          playPauseButton.classList.remove('fa-play');
          playPauseButton.classList.add('fa-pause');
      }
  }

  function nextMusic() {
      currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
      loadMusic(currentMusicIndex);
  }

  function previousMusic() {
      currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
      loadMusic(currentMusicIndex);
  }

  function toggleLoop() {
      audio.loop = !audio.loop;
      loopButton.textContent = `Loop: ${audio.loop ? 'On' : 'Off'}`;
      loopIcon.className = `fas fa-retweet${audio.loop ? ' active' : ''}`;
  }

  audio.addEventListener('timeupdate', function () {
      seekBar.value = (audio.currentTime / audio.duration) * 100;
      updateSeekBar();
      let scrollPosition = (audio.currentTime / audio.duration) * (lyricsDiv.scrollHeight - lyricsDiv.clientHeight);
      lyricsDiv.scrollTop = scrollPosition;
  });

  seekBar.addEventListener('input', function () {
      audio.currentTime = (audio.duration * seekBar.value) / 100;
      updateSeekBar();
  });

  function updateSeekBar() {
      let currentTime = formatTime(audio.currentTime);
      let duration = formatTime(audio.duration);
      seekBar.setAttribute('aria-valuenow', audio.currentTime);
      seekBar.setAttribute('aria-valuemax', audio.duration);
  }

  function formatTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      let remainingSeconds = Math.floor(seconds % 60);
      remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
      return minutes + ':' + remainingSeconds;
  }

  playPauseButton.addEventListener('click', togglePlayPause);
  forwardButton.addEventListener('click', nextMusic);
  backwardButton.addEventListener('click', previousMusic);
  loopButton.addEventListener('click', toggleLoop);

  // Load the first music
  loadMusic(currentMusicIndex);
});

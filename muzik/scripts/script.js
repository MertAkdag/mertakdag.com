new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [
                {
                    name: "Aşkın Kanunu",
                    artist: "Tuğkan",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/2.mp3",
                    favorited: false
                },



                {
                    name: "Bütün İstanbul biliyor",
                    artist: "İkiye On Kala",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/3.mp3",
                    favorited: true
                },



                {
                    name: "Git",
                    artist: "Tuğkan",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/6.mp3",
                    favorited: false
                },



                {
                    name: "Kaptan",
                    artist: "Emircan İğrek",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/5.mp3",
                    favorited: false
                },



                {
                    name: "Beyaz",
                    artist: "Emir Can İğrek",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/4.mp3",
                    favorited: true
                },



                {
                    name: "Yüzsüz Yürek",
                    artist: "Feride Hilal Akın",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/Feride%20Hilal%20Ak%C4%B1n%20%20Y%C3%BCzs%C3%BCz%20Y%C3%BCrek.mp3",
                    favorited: false
                },



                {
                    name: "Ateşten Gömlek",
                    artist: "Sagopa Kajmer",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/Sagopa%20Kajmer%20%20Ate%C5%9Ften%20G%C3%B6mlek.mp3",
                    favorited: true
                },



                {
                    name: "Beraber Olsaydık",
                    artist: "Yeis Sensura ft. Sehabe",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/Yeis%20Sensura%20ft.%20Sehabe%20-%20Beraber%20Olsayd%C4%B1k%20Official%20Video.mp3",
                    favorited: false
                },



                {
                    name: "Kaç Kere Öldün",
                    artist: "Şanışer",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/Akilli-kus/master/%C5%9Ean%C4%B1%C5%9Fer%20-%20Ka%C3%A7%20Kere%20%C3%96ld%C3%BCn_%20Offical%20Music%20Video.mp3",
                    favorited: false
                },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                {
                    name: "Gidiyor Gibiyim",
                    artist: "Bahadır Sağlam",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/10.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/musics/master/Bahad%C4%B1r%20Sa%C4%9Flam%20-%20Gidiyor%20Gibiyim.mp3",
                    favorited: false
                },



                {
                    name: "Kır Papatyası",
                    artist: "Bahadır Sağlam",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/11.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/musics/master/Bahad%C4%B1r%20Sa%C4%9Flam%20-%20K%C4%B1r%20Papatyas%C4%B1.mp3",
                    favorited: false
                },


                {
                    name: "Beni Yak Kendini Yak",
                    artist: "Duman",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/12.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/musics/master/Duman-Beni%20Yak%20Kendini%20Yak.mp3",
                    favorited: false
                },



                {
                    name: "Papatya",
                    artist: "Çağan Şengül",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/13.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/musics/master/%C3%87a%C4%9Fan%20%C5%9Eeng%C3%BCl%20-%20Papatya.mp3",
                    favorited: false
                },



                {
                    name: "Uyursam Geçer Mi",
                    artist: "Eskitilmiş Yaz",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/14.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/musics/master/Eskitilmi%C5%9F%20Yaz%20-%20Uyursam%20Ge%C3%A7er%20Mi%20(Official%20Video).mp3",
                    favorited: false
                },



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                {
                    name: "Bu şehri yakın",
                    artist: "aziz piyade",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/17.jpg",
                    source: "https://raw.githubusercontent.com/MertAkdag/musics/master/Aziz%20Piyade-Bu%20%C5%9Eehri%20Yak%C4%B1n.mp3",
                    favorited: false
                }

            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if(this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
                ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});

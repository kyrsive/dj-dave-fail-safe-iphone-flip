/* @title    Fail-safe (iphone flip)
   @by       DJ_Dave equovil
   @license  CC BY-NC-SA (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/

samples('github:tidalcycles/dirt-samples')
samples('github:kyrsive/diarrhea-drumkit')
samples('github:kyrsive/stardust-drumkit')
samples('github:kyrsive/blancnote-samples')
// ^ all of my samples are in my github folder, and a bunch of drum samples are from this tidalcycles library on github (the ones in this flip r also on github except for the tag)

Pattern.prototype.bsend = function (id) { return this.bus(id).dry(0); };
// ^ important function for mastering

setCps(140/60/4) 

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// below are all the instrument and vocal loops RESTRUCTURED >:DDDDDDDD


LEAD: n(irand("6").seg(8).slow(2)).scale("c#4:minor:pentatonic")
  .fast("[8]").slow(16).trans("[12,0]")
  .sound("gm_lead_7_fifths:0")
  .lpf(100).lpenv(11).lpd(0.9).lpa(0.8)
  //.FX(room(1).rfade(30)).FXr(0.4)
  .bsend(1)


BASSLINE: note("{c#3@3 a2@2 e2@3 c#3@0.5 f#2@2.5 a2@2 e2@3}%8"
  .slow(2)).trans("-12")
  //.rarely(trans("12"))
  .sound("jj_808:3").cut(4)
 // .distort(1)
  .bsend(1).bgain(1.2).mask("<0!8 1!24>")

CHOPS: s("CHOPS").clip(1).note("c2").distort(1)
  //.postgain(0.1)
  .jux(rev)
  //.speed(-1)
 .FX(delay(0.2).ds(1/4).dfb(0.4)).FXr(0.6)
.slice(16, "[0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15]".fast(2)).ply(2).o(2)
  .rib(2433,16)
.bsend(1).bgain(0.4)

GANG_VOX: s("GANG_VOX").loopAt(8).chop(16).clip(1)
.bsend(1).bgain(1.7)

$: s("<equ_tag -!31>").bsend(1).bgain(1.4)

DRUMS: stack(s("ug_sd(3,8,6)/[2 3]")
  .brak().fast("<2 1>")
  .ply("1 2?").n(irand(8))
  .rib(0,16)
.bsend(1).bgain(1.2)

, s("ug_chant:4(1,8,3)/2").bsend(1).bgain(1.4)

, s("[jj_sd|bn_hh]*[6]")
             .clip(0.6)
  .slow("4").sometimes(x => x.rev())
  .clip(1).cut(9)
  .n(irand(40)).rib(2222,16).bsend(1).bgain(1.1)

, s("jj_oh(1,8,7)/3").bsend(1).bgain(1.1)

, s("jj_hh:2(12,16,4)/2")
  .speed("[1]")
.fast("[1|2]").rib(3533,16).bsend(1).bgain(1.2)

, s("ug_cp:9(1,8,6)*<1 2>").n(irand(4)).bsend(1).bgain(1.3)
              )
  .mask("<0!8 1!24>")
  
$: s("bus:1").soft(0)
  .scope()

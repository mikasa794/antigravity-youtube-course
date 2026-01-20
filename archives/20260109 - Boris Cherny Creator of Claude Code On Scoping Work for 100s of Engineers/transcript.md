[00:00:00] I think you had a few stories where you
[00:00:02] scoped out work for hundreds of
[00:00:04] engineers and I was just thinking about
[00:00:06] how do you do that if there's so much to
[00:00:09] scope and you know you're one person how
[00:00:12] do you go about doing such massive
[00:00:15] scoping requests for leadership.
[00:00:17] >> Yeah, this was a totally insane time. So
[00:00:19] I worked a lot with uh Tina Shutchman
[00:00:21] who's uh she she's now at Microsoft um
[00:00:23] but she was she was my manager at the
[00:00:24] time and then uh Epha who's who's my
[00:00:26] manager after and there was a lot more
[00:00:29] investment going into Facebook groups at
[00:00:32] the time. So I think the org was maybe
[00:00:35] 150 or 200 people when I joined and by
[00:00:37] the time I left to Instagram I think it
[00:00:39] was like 600 or 800 people something
[00:00:41] like that.
[00:00:42] So there's this feeling from Zach that
[00:00:45] Facebook app should be all about
[00:00:46] communities and he just wanted us to go
[00:00:48] like faster and faster to make that a
[00:00:50] reality and you know as an executive
[00:00:53] your kind of biggest way to do that is
[00:00:54] to put the right people in charge of
[00:00:56] decisions and then uh to give them
[00:00:59] resources and so like in you know in the
[00:01:00] case of meta it's it's just engineers um
[00:01:03] you don't need like GPUs for this you
[00:01:04] need like engineers to do stuff and so
[00:01:06] we pitched this project to uh to Zuck
[00:01:08] and it was called communities as the new
[00:01:10] organizations that was like the internal
[00:01:11] him and he grin just like a a bunch of
[00:01:14] headcount to go towards this and so we
[00:01:15] just had to figure out what these people
[00:01:16] will do and you know for him I I get it.
[00:01:20] It's like if the thing is important you
[00:01:22] got to put a bunch of people on it in
[00:01:23] hindsight what I would have done
[00:01:25] differently is I I would have put way
[00:01:26] less people on it [gasps] because what
[00:01:28] matters is like solving people's
[00:01:30] problems and building awesome product
[00:01:32] and this actually has to kind of be
[00:01:34] bottoms up and you kind of want to like
[00:01:36] slowly dial this up as you find product
[00:01:38] market fit for new product lines. You
[00:01:39] can't just do it all at once. And uh
[00:01:43] yeah, we just had to like scope out all
[00:01:44] the stuff. Like there were weeks where I
[00:01:45] had to, you know, do like a scoping dock
[00:01:48] for like, okay, we're going to put 30
[00:01:49] engineers on this. Here's like three
[00:01:50] technical options. We're going to pick
[00:01:51] this one. Next project, we're going to
[00:01:53] put 20 engineers on this. Here's three
[00:01:54] options. We're going to pick this one.
[00:01:55] Next project we're going to do and just
[00:01:57] like doing this like over and over again
[00:01:58] just to have like, you know, some some
[00:02:01] sort of confidence that this thing isn't
[00:02:02] totally crazy. We did some baseline
[00:02:04] technical scoping roughly matching the
[00:02:06] number of engineers to the project. And
[00:02:08] there there's actually some pretty fun
[00:02:10] stuff like I remember we were trying to
[00:02:11] merge Facebook groups and uh pages at
[00:02:14] some point like in the in the data model
[00:02:16] side and this was this like very gnarly
[00:02:18] migration. it it would have been you
[00:02:20] know to fully do it. This is like many
[00:02:21] years and like probably hundreds of
[00:02:23] engineers to fully do it cuz you have to
[00:02:25] do it across like the data model, the
[00:02:27] product layer, integrity systems, ad
[00:02:28] systems. There's just all sorts of stuff
[00:02:30] that has to get merged. And at the time,
[00:02:33] Yseph Carver uh he just joined I think
[00:02:35] he came from either profile or events
[00:02:38] like a different org that that joined
[00:02:39] forces with groups to make this happen.
[00:02:42] And he was working on it, but he was
[00:02:43] kind of struggling with a with a
[00:02:44] decision at the time. And I think he was
[00:02:46] even more senior than I was, but he just
[00:02:48] like wasn't making the decision on the
[00:02:49] data model. And so I just took a bunch
[00:02:51] of people and I was like, "All right,
[00:02:53] all the tech leads across the entire
[00:02:55] org. We're going to spend the next like
[00:02:57] three hours on this day and we're going
[00:02:59] to do this like essentially like game
[00:03:01] where we get to do architecture." And so
[00:03:03] I split everyone up into two teams. I
[00:03:05] think it was like blue team and green
[00:03:06] team or I forgot what these were. And we
[00:03:09] gave everyone this like this problem of
[00:03:10] like how do you merge these data models?
[00:03:12] Here are the requirements. And then
[00:03:13] everyone had three hours in a whiteboard
[00:03:15] and they had to come up with a design.
[00:03:17] And what was cool is that going into it,
[00:03:20] we had no idea how we would do this
[00:03:21] because it just seemed too crazy of a
[00:03:23] problem. But the going out of it, we had
[00:03:26] two designs that were 80% the same. And
[00:03:29] so it was really obvious what we could
[00:03:30] execute on. And then the 20% where the
[00:03:32] differences were, it was very obvious
[00:03:34] where the risk was. And so we could kind
[00:03:36] of front frontload a little bit of that
[00:03:38] risk with a little bit of technical
[00:03:39] spikes. Um, but also we can just start
[00:03:41] execution right away because we knew
[00:03:42] exactly what we had to do.
[00:03:44] >> Yeah, that was really interesting when I
[00:03:46] saw that. It was like a technical design
[00:03:49] competition with all the senior
[00:03:50] engineers and you just put people in
[00:03:53] separate rooms to come up with um I've
[00:03:56] never heard anything like that when you
[00:03:58] propose that idea for this design
[00:04:00] competition within the org. Were people
[00:04:03] excited about it or was it like kind of
[00:04:05] a crazy idea? Yeah, it was sort of
[00:04:06] crazy. I mean with this sort of thing
[00:04:08] you just have to kind of do it. So I
[00:04:09] just I just kind of told everyone, hey,
[00:04:11] we're doing this and then [laughter] I
[00:04:12] just put it on everyone's calendar and
[00:04:14] um it just seems fun, you know? like as
[00:04:16] an engineer you would want to do it but
[00:04:18] I think this is the sort of thing where
[00:04:19] like sometimes you need consensus and
[00:04:21] sometimes you just have to act and in
[00:04:23] this case because the path was unclear
[00:04:24] it was important to act but at the same
[00:04:27] time I didn't know how to proceed so we
[00:04:29] had to kind of get everyone together to
[00:04:30] build consensus and so I think it's like
[00:04:32] as a leader you're kind of always
[00:04:33] juggling these kind of two things after
[00:04:35] that experience just giving being given
[00:04:38] hundreds of engineers and scoping things
[00:04:40] out do you have any tips for someone
[00:04:42] who's like a tech lead who's needs to do
[00:04:45] quick, you know, scoping. Anything that
[00:04:47] worked well for you? I think the biggest
[00:04:49] thing I think the biggest failure mode
[00:04:51] that I've seen is people just taking too
[00:04:52] long and getting too into the weeds.
[00:04:54] There's always an infinite number of
[00:04:56] details. Just start with a high bubble.
[00:04:58] You know, most technical scoping you can
[00:04:59] do within like 30 minutes very very
[00:05:02] roughly. Um, and if you don't know the
[00:05:04] systems, like nowadays you would just
[00:05:05] use quad code run in the codebase and
[00:05:07] just ask it to like, you know, like what
[00:05:09] are all the systems involved? They can
[00:05:10] actually just do this for you. And this
[00:05:12] is another just totally insane change.
[00:05:14] You know, I when I was doing this stuff,
[00:05:16] I never would have expected that AI
[00:05:18] could do this for me now. Um, but now it
[00:05:21] does. In the past, I think that would
[00:05:24] have been my biggest advice though is uh
[00:05:27] just time box it. Spend maybe 30
[00:05:29] minutes, maybe like couple hours max if
[00:05:31] you have to like dig through code and
[00:05:33] stuff. Um, definitely reach out to
[00:05:35] experts and just make a list of experts.
[00:05:37] Talk to all of them. Run the design by
[00:05:39] them. Don't just ask them for input.
[00:05:41] give them a straw man because then they
[00:05:42] can actually like give you feedback on
[00:05:44] it and it's something to go off of.
[00:05:46] >> Hey, thanks for watching that clip. If
[00:05:48] you thought it was interesting, it's
[00:05:49] part of a longer conversation which you
[00:05:51] can find right here, right now. And as
[00:05:53] always, if you have any feedback for me,
[00:05:55] I'd love to hear it. You can leave a
[00:05:57] comment on YouTube. I read every single
[00:05:59] one that I get.

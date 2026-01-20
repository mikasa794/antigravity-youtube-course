[00:00:00] We worked on a guest post together had
[00:00:01] this really key insight that building AI
[00:00:04] products is very different from building
[00:00:06] nonAI products.
[00:00:08] >> Most people tend to ignore the
[00:00:09] non-determinism. You don't know how the
[00:00:11] user might behave with your product and
[00:00:12] you also don't know how the LLM might
[00:00:14] respond to that. The second difference
[00:00:16] is the agency control trade-off. Every
[00:00:19] time you hand over decision-m
[00:00:21] capabilities to agentic systems, you're
[00:00:23] kind of relinquishing some amount of
[00:00:24] control on your end.
[00:00:26] >> This significantly changes the way you
[00:00:27] should be building product. So we
[00:00:28] recommend building step by step. When
[00:00:30] you start small, it forces you to think
[00:00:32] about what is the problem that I'm going
[00:00:34] to solve. In all this advancements of
[00:00:36] the AI, one easy slippery slope is to
[00:00:38] keep thinking about complexities of the
[00:00:40] solution and forget the problem that
[00:00:41] you're trying to solve.
[00:00:42] >> It's not about being the first company
[00:00:44] to have an agent among your competitors.
[00:00:46] It's about have you built the right fly
[00:00:48] wheels in place so that you can improve
[00:00:49] over time.
[00:00:50] >> What kind of ways of working do you see
[00:00:52] in companies that build AI products
[00:00:54] successfully? I used to work with the
[00:00:56] CEO of now Rackspace. He would have this
[00:00:59] block every day in the morning which
[00:01:01] would say catching up with AI 4 to 6:00
[00:01:03] a.m. Leaders have to get back to being
[00:01:05] hands-on. You must be comfortable with
[00:01:07] the fact that your intuions might not be
[00:01:09] right and you probably are the dumbest
[00:01:11] person in the room and you want to learn
[00:01:12] from everyone.
[00:01:13] >> What do you think the next year of AI is
[00:01:15] going to look like?
[00:01:16] >> Persistence is extremely valuable.
[00:01:18] Successful companies right now building
[00:01:20] in any new area. They are going through
[00:01:22] the pain of learning this, implementing
[00:01:24] this and understanding what works and
[00:01:25] what doesn't work. Pain is the new mode.
[00:01:29] Today my guests are Aishwaria Raanti and
[00:01:32] Kiti Bottom. Kiti works on codecs at
[00:01:34] OpenAI and has spent the last decade
[00:01:36] building AI and ML infrastructure at
[00:01:39] Google and at Kumo. Ash was an early AI
[00:01:41] researcher at Alexa and Microsoft and
[00:01:43] has published over 35 research papers.
[00:01:46] Together, they've led and supported over
[00:01:48] 50 AI product deployments across
[00:01:51] companies like Amazon, Data Bricks,
[00:01:52] OpenAI, Google, and both startups and
[00:01:55] large enterprises. Together, they also
[00:01:57] teach the number one rated AI course on
[00:01:59] Maven, where they teach product leaders
[00:02:01] all of the key lessons they've learned
[00:02:02] about building successful AI products.
[00:02:05] The goal of this episode is to save you
[00:02:07] and your team a lot of pain and
[00:02:09] suffering and wasted time trying to
[00:02:11] build your AI product. Whether you are
[00:02:13] already struggling to make your product
[00:02:15] work or want to avoid that struggle,
[00:02:17] this episode is for you. If you enjoy
[00:02:19] this podcast, don't forget to subscribe
[00:02:20] and follow it in your favorite
[00:02:21] podcasting app or YouTube. It helps
[00:02:23] tremendously. And if you become an
[00:02:25] annual subscriber of my newsletter, you
[00:02:27] get a year free of a ton of incredible
[00:02:30] products, including a year free of
[00:02:32] lovable, replet, bold, gamma, nad
[00:02:34] linear, Devon, Postto, Superhum, Dcript,
[00:02:36] Whisper Flow, Perplexity, Warp, Granola,
[00:02:37] Magic Pattern, Dracast, Chapter D,
[00:02:39] Mobit, and Stripe Atlas. Head on over to
[00:02:40] lenny'snewsletter.com and click product
[00:02:42] pass. With that, I bring you Awaria
[00:02:45] Oranti and Kiti bottom after a short
[00:02:47] word from our sponsors.
[00:02:49] This episode is brought to you by Merge.
[00:02:52] Product leaders hate building
[00:02:54] integrations. They're messy. They're
[00:02:56] slow to build. They're a huge drain on
[00:02:58] your road map, and they're definitely
[00:02:59] not why you got into product in the
[00:03:01] first place. Lucky for you, Merge is
[00:03:04] obsessed with integrations. With a
[00:03:06] single API, B2B SAS companies embed
[00:03:08] Merge into their product and ship 220
[00:03:11] plus customerf facing integrations in
[00:03:13] weeks, not quarters. Think of merge like
[00:03:15] Plaid, but for everything B2B SAS.
[00:03:18] Companies like Merall AI, ramp, and use
[00:03:22] Merge to connect their customers as
[00:03:23] accounting, HR, ticketing, CRM, and file
[00:03:26] storage systems to power everything from
[00:03:28] automatic onboarding to AI ready data
[00:03:30] pipelines. Even better, Merge now
[00:03:33] supports the secure deployment of
[00:03:34] connectors to AI agents with a new
[00:03:36] product so that you can safely power AI
[00:03:38] workflows with real customer data. If
[00:03:40] your product needs customer data from
[00:03:42] dozens of systems, Merge is the fastest,
[00:03:45] safest way to get it. Book and attend a
[00:03:48] meeting at merge.dev/lenny
[00:03:50] and they'll send you a $50 Amazon gift
[00:03:52] card. That's merge.dev/lenny.
[00:03:56] This episode is brought to you by
[00:03:57] Stella, the customer research platform
[00:03:59] built for the AI era. Here's the truth
[00:04:02] about user research. It's never been
[00:04:04] more important or more painful. Teams
[00:04:07] want to understand why customers do what
[00:04:09] they do. But recruiting users, running
[00:04:11] interviews, and analyzing insights takes
[00:04:13] weeks. By the time the results are in,
[00:04:15] the moment to act has passed. Strella
[00:04:18] changes that. It's the first platform
[00:04:20] that uses AI to run and analyze in-depth
[00:04:22] interviews automatically, bringing fast
[00:04:25] and continuous user research to every
[00:04:27] team. Strella's AI moderator asks real
[00:04:30] follow-up questions, probing deeper when
[00:04:32] answers are vague, and services patterns
[00:04:34] across hundreds of conversations, all in
[00:04:36] a few hours, not weeks. Product design
[00:04:39] and research teams at companies like
[00:04:41] Amazon and Dualingo are already using
[00:04:43] Stella for Figma prototype testing,
[00:04:45] concept validation, and customer journey
[00:04:47] research, getting insights overnight
[00:04:49] instead of waiting for the next sprint.
[00:04:51] If your team wants to understand
[00:04:53] customers at the speed you ship
[00:04:54] products, try Strella. Run your next
[00:04:57] study at strea.io/lenny.
[00:05:00] That's s t re l.io/lenny.
[00:05:07] Ash and Kiti, thank you so much for
[00:05:10] being here and welcome to the podcast.
[00:05:13] >> Thank you. Thank you for having us.
[00:05:15] Super excited for this.
[00:05:16] >> Let me set the stage for the
[00:05:17] conversation that we're going to have
[00:05:18] today. So, you two have built a bunch of
[00:05:22] AI products yourself. You've gone deep
[00:05:24] with a lot of companies who uh have
[00:05:27] built AI products, have struggled to
[00:05:28] build AI products, build AI agents. You
[00:05:31] also teach a course on building AI
[00:05:33] products successfully that and you're
[00:05:35] kind of like on this mission to just
[00:05:37] reduce pain and suffering and failure uh
[00:05:40] that you constantly see people go
[00:05:41] through when they're building AI
[00:05:43] products. So to set a little just
[00:05:45] foundation for the conversation we're
[00:05:46] going to have, what are you seeing on
[00:05:48] the ground within companies trying to
[00:05:51] build AI products? What's going well?
[00:05:53] What's not going well?
[00:05:54] >> I think 2025 has been significantly
[00:05:57] different than 2024. one, the skepticism
[00:06:01] has significantly reduced. Um, there
[00:06:03] were tons of leaders last year who
[00:06:05] probably thought this would be yet
[00:06:06] another crypto wave and kind of
[00:06:08] skeptical to get started and a lot of
[00:06:11] the use cases that I saw last year were
[00:06:13] more of Snapchat on your data, right?
[00:06:14] and that was, you know, um calling
[00:06:16] themselves an AI product. And this year,
[00:06:19] a ton of companies are really rethinking
[00:06:21] their user experiences and their
[00:06:23] workflows and all of that and really
[00:06:24] understanding that you need to
[00:06:27] deconstruct and reconstruct your
[00:06:29] processes in order to have a in order to
[00:06:31] build successful AI products, right? And
[00:06:33] that's that's the good stuff. The bad
[00:06:36] stuff is the execution is still all over
[00:06:38] the place. Um, think of it, right? This
[00:06:40] is a three-year-old field. There are no
[00:06:42] play playbooks. there are no textbooks.
[00:06:45] Um so you really need to figure out as
[00:06:47] you go and the AI life cycle both
[00:06:50] pre-eployment and post- deployment is
[00:06:52] very different as compared to a
[00:06:54] traditional software life cycle. Um and
[00:06:57] so so a lot of old contracts and
[00:06:59] handoffs between traditional roles like
[00:07:02] say PMs and engineers and data folks has
[00:07:05] now been broken. It's and people are
[00:07:07] really getting adapted to this new way
[00:07:10] of working together and kind of owning
[00:07:12] the same feedback loop in a way because
[00:07:15] previously I feel like PMs and engineers
[00:07:17] and all of these folks had their own
[00:07:18] feedback loops to optimize and now you
[00:07:21] need to be probably sitting in the same
[00:07:22] room. You're probably looking at agent
[00:07:24] traces together and deciding how your uh
[00:07:26] product should behave. So it's a tighter
[00:07:29] form of collaboration. So companies are
[00:07:31] still kind of figuring that out. That's
[00:07:33] kind of what I see um in my consulting
[00:07:36] practice this year.
[00:07:37] >> So, let me follow that thread. We worked
[00:07:39] on a guest post together that came out a
[00:07:40] few months ago. And the thing that stood
[00:07:42] out to me most that stuck with me most
[00:07:44] after working on that post is you had
[00:07:46] this really uh key insight that building
[00:07:49] AI products is very different from
[00:07:52] building non-AI products. And the thing
[00:07:54] that you're big on getting across is
[00:07:56] there's two very big differences. Talk
[00:07:59] about those two differences.
[00:08:01] >> Yes. Um and again I I want to make sure
[00:08:03] that we drive home the right point. Um
[00:08:06] there are tons of uh similarities of
[00:08:09] building AI systems and software systems
[00:08:11] as well. But then there are some things
[00:08:13] that kind of fundamentally change the
[00:08:15] way you build software systems um versus
[00:08:18] AI systems, right? And one of them that
[00:08:20] most people tend to ignore is the
[00:08:21] non-determinism. Uh you're pretty much
[00:08:24] working with a non-deterministic API as
[00:08:27] compared to traditional software. What
[00:08:29] does that mean and why does that have to
[00:08:31] affect us is in traditional software you
[00:08:34] pretty much have a very well-mapped
[00:08:36] decision engine or workflow. Think of
[00:08:39] something like booking.com right you um
[00:08:41] you have an intention that uh you want
[00:08:43] to make a booking in San Francisco for
[00:08:45] two nights etc. uh the product has kind
[00:08:48] of been built uh so that your intention
[00:08:50] can be converted into a particular
[00:08:52] action and you kind of are clicking
[00:08:54] through a bunch of buttons, options,
[00:08:56] forms and all of that and you finally
[00:08:57] achieve your intention. But now that
[00:08:59] layer in AI products has completely been
[00:09:02] replaced by a very fluid um interface
[00:09:06] which is mostly natural language which
[00:09:09] means you the user can literally come up
[00:09:11] with ton of ways of saying uh or
[00:09:13] communicating their intentions, right?
[00:09:15] And that kind of changes a lot of things
[00:09:17] because now you don't know how your user
[00:09:19] is going to behave. That's on the input
[00:09:21] side. And the output is also that you're
[00:09:24] working with a non-deterministic
[00:09:25] probabilistic API which is your LLM. And
[00:09:29] LLMs are pretty sensitive to prompt
[00:09:31] phrasings and they're pretty much black
[00:09:33] boxes. So you don't even know how the
[00:09:35] output surface will look like, right? So
[00:09:37] this um you don't know how the user
[00:09:39] might behave with your product and you
[00:09:40] also don't know how the LLM might
[00:09:42] respond to that. So you're now working
[00:09:44] with an input, output, and a proc
[00:09:46] process. And you don't understand all
[00:09:49] the three very well. You're trying to
[00:09:50] kind of anticipate behavior and build
[00:09:52] for it. And with agentic systems, this
[00:09:55] kind of gets even harder. And that's
[00:09:56] where we talk about the second
[00:09:58] difference, which is the agency control
[00:10:00] trade-off. Right? What we mean by that,
[00:10:03] and I'm kind of shocked. So many people
[00:10:06] don't talk about this. They're extremely
[00:10:08] obsessed with building autonomous
[00:10:09] systems, agents can that can do work for
[00:10:11] you. But every time you hand over
[00:10:14] decision-m capabilities or autonomy to
[00:10:16] agentic systems, you're kind of
[00:10:18] relinquishing some amount of control on
[00:10:20] your end, right? And when you do that,
[00:10:21] you want to make sure that your agent
[00:10:23] has um caning your trust or it is
[00:10:26] reliable enough that you can allow it to
[00:10:28] make decisions. And that's where we talk
[00:10:30] about this agency control trade-off
[00:10:32] which is if you give your AI agent or
[00:10:35] your AI system whatever it is more
[00:10:36] agency which is the ability to make
[00:10:38] decisions you're also um losing some
[00:10:41] control and you want to make sure that
[00:10:43] the agent or the AI system has earned um
[00:10:47] that ability or has built up trust over
[00:10:49] time.
[00:10:49] >> So just to summarize what you're sharing
[00:10:51] here essentially people have been
[00:10:54] building product software products for a
[00:10:56] long time. We're now in a world where
[00:10:58] the software you're building is one
[00:11:01] non-deterministic can just do things
[00:11:03] differently like you know as you said
[00:11:04] you go to booking.com you find a hotel
[00:11:06] it's going to be the same experience
[00:11:07] every time you'll see different hotels
[00:11:08] but it's a predictable experience with
[00:11:10] AI you can't predict that it's going to
[00:11:12] be the exact same thing the thing that
[00:11:14] you uh plan it to be every time and then
[00:11:16] the other is there's this trade-off
[00:11:18] between agency and control how much will
[00:11:20] the AI do for you versus how much should
[00:11:22] the person still be in charge and the
[00:11:25] what I'm hearing is the big point here
[00:11:26] is significantly changes the way you
[00:11:28] should be building product and we're
[00:11:29] going to talk about the impact on how
[00:11:31] the product development life cycle
[00:11:33] should change as a result. Is there
[00:11:36] anything else you want to add there
[00:11:37] before we get into into that? Yeah, it's
[00:11:40] definitely like one of the key points
[00:11:41] that uh this kind of distinction needs
[00:11:44] to exist in your mind like when you're
[00:11:46] starting to build. For example, think
[00:11:48] about if your like objective is to hike
[00:11:50] uh half term inity, right? You don't
[00:11:52] start hiking it every day, but you start
[00:11:54] you know training yourself for like you
[00:11:56] know in in minor parts and then you
[00:11:58] slowly improve and then like you go to
[00:12:00] the end goal, right? I feel like that's
[00:12:02] extremely similar to what you want to
[00:12:04] build AI products in the sense that when
[00:12:06] you don't start with like agents with
[00:12:08] all the tools and all the context that
[00:12:10] you have in the company in day one and
[00:12:12] expect it to work or like you don't even
[00:12:13] tinker at that level. You need to be
[00:12:15] deliberately starting in places where
[00:12:18] there is minimal impact and more human
[00:12:20] control so that you have like a good
[00:12:22] grip of what are the current
[00:12:23] capabilities and what can I do with them
[00:12:25] and then slowly you know like lean into
[00:12:27] the more agency and lesser control. So
[00:12:29] this gives you that confidence that okay
[00:12:32] I can know that okay this is the
[00:12:34] particular problem that I'm facing and
[00:12:36] the AI can solve this extent of it and
[00:12:38] then like let me next think through what
[00:12:40] context I need to bring in what kind of
[00:12:42] tools I need to add to this to improve
[00:12:45] the uh experience right so I feel like
[00:12:47] it's also uh it's a good and a bad thing
[00:12:49] in sense that it's good that you don't
[00:12:51] have to see the complexity of the
[00:12:53] outside world of like you know all of
[00:12:55] this fancy AI agents force and feel like
[00:12:57] I cannot do that it's always everyone is
[00:12:59] starting from very uh minimalistic
[00:13:02] structures and then evolving. And the
[00:13:04] second part is like it's also good the
[00:13:06] the bad thing is that as you are like
[00:13:09] you know trying to build this oneclick
[00:13:10] agents into your company you don't have
[00:13:13] to be overwhelmed with this complexity
[00:13:15] you can like slowly graduate. So that's
[00:13:16] extremely important and we see this as a
[00:13:18] repeating pattern over and over.
[00:13:20] >> Okay. All right. So, let's actually
[00:13:21] follow that, right? Cuz that's a really
[00:13:22] important component of how you recommend
[00:13:25] people build AI stuff. AI stuff, AI
[00:13:27] products, AI agents, all the AI things.
[00:13:29] Um, so give us an example what you're
[00:13:31] talking about here. This idea of
[00:13:33] starting
[00:13:34] uh slow with agency and control and then
[00:13:37] moving kind of up this rung.
[00:13:38] >> Yeah. For example, a very important or
[00:13:41] like very prevalent uh application of AI
[00:13:44] agents is like customer support, right?
[00:13:45] Uh imagine like you are a company who
[00:13:48] has like a lot of customer support
[00:13:50] tickets and why even imagine like OpenAF
[00:13:53] faced the exact same thing when we were
[00:13:55] launching products and there was like a
[00:13:57] huge spike of uh support volume as like
[00:14:00] you know we launch successful products
[00:14:01] like image and or uh you know like GPD5
[00:14:04] and things like that the kind of
[00:14:05] questions you get is different the kind
[00:14:07] of like you know u problems that the
[00:14:09] customers bring to you is different. So
[00:14:11] it's not about just like dumping all the
[00:14:14] uh list of help center articles that you
[00:14:16] have into the AI agent. you kind of
[00:14:18] understand what are the things that you
[00:14:20] can build and so initially the first
[00:14:23] step of it would be something like uh
[00:14:25] you have your support agents the human
[00:14:27] support agents but you will be
[00:14:28] suggesting uh in terms of okay this is
[00:14:30] what the AI thinks that is the right
[00:14:32] thing to do and then you get that
[00:14:34] feedback loop from the humans that okay
[00:14:36] this is actually a good suggestion for
[00:14:38] me in this particular case and this is a
[00:14:39] bad suggestion and then you can go back
[00:14:41] and understand okay uh this is what the
[00:14:45] drawbacks are or this is where the blind
[00:14:46] spots are and then how do I fix that?
[00:14:48] And once you get that you can increase
[00:14:50] the autonomy to say that okay I don't
[00:14:52] need to suggest to the human I'll
[00:14:54] actually show the uh show the answer
[00:14:57] directly to the customers to the
[00:14:59] customer and then we can actually add
[00:15:01] more complexity in terms of okay uh I
[00:15:04] was only answering questions based on
[00:15:06] health center articles but now let me
[00:15:08] add new functionality like I can
[00:15:10] actually issue refunds to the customers
[00:15:11] I can actually raise feature requests
[00:15:13] with the engineering team and all of
[00:15:14] these things. So if you start all with
[00:15:16] all of this on day one, it's incredibly
[00:15:18] hard to control the complexity. So we
[00:15:20] recommend like you know building step by
[00:15:21] step and then increasing it.
[00:15:23] >> Awesome. And you have a visual actually
[00:15:25] that we'll share of what this looks
[00:15:27] like. But just to kind of mirror back
[00:15:29] what you're describing this idea of
[00:15:30] start with high control, low agency in
[00:15:33] your the example you gave is the support
[00:15:35] agent is just kind of giving suggestions
[00:15:38] is not able to do anything. the user is
[00:15:41] in charge. And then as that becomes
[00:15:44] useful and you are confident it's doing
[00:15:47] the right sort of work, you give it a
[00:15:49] little more agency and you kind of pull
[00:15:51] back on the control the user has. And
[00:15:54] then if that's starting to go well, then
[00:15:55] you give it more agency and the user
[00:15:57] needs less control to control it.
[00:16:01] >> Awesome.
[00:16:02] >> I I think the higher level idea here is
[00:16:05] with AI systems, it's all about behavior
[00:16:08] calibration. It's incredibly impossible
[00:16:11] to predict up front how your system
[00:16:13] behaves. Now what do you do about it?
[00:16:16] You make sure that you don't ruin your
[00:16:19] customer experience or your end user
[00:16:21] experience. Um you keep that as is but
[00:16:24] then remove the amount of control that
[00:16:25] the human has and there is no single
[00:16:29] right way of doing it. You can decide
[00:16:32] how to constrain that autonomy. Right?
[00:16:34] Um, a very I mean a different example of
[00:16:37] how you could constrain autonomy is
[00:16:39] pre-authorization use cases. Insurance
[00:16:42] pre-authorization is a very ripe use
[00:16:44] case for AI because uh clinicians spend
[00:16:47] a lot of time um pre-authorizing
[00:16:50] uh things like blood tests, MRIs and
[00:16:53] things like that, right? And there are
[00:16:54] some cases which are more of lowhanging
[00:16:57] fruits. for instance, MRIs and blood
[00:16:59] tests because um as soon as you know
[00:17:01] patients information, it's easier to
[00:17:03] approve that and AI could do that versus
[00:17:06] something like an invasive surgery, etc.
[00:17:08] is more high-risk. You don't want to be
[00:17:10] doing that autonomously. So, you can
[00:17:12] kind of determine which of these use
[00:17:14] cases should go through that human and
[00:17:16] the loop layer versus which of the use
[00:17:17] cases AI can conveniently handle. And
[00:17:20] then all through this process, you're
[00:17:21] also logging what the human is doing,
[00:17:23] right? because you want to build a
[00:17:25] flywheel um that you could use in order
[00:17:28] to improve your system. Um so you're
[00:17:31] essentially um not ruining the user
[00:17:34] experience, not eroding trust at the
[00:17:36] same time logging what humans would
[00:17:38] otherwise do so that you can
[00:17:40] continuously improve your system.
[00:17:41] >> So let me let me give you a few more
[00:17:43] examples of this kind of progression
[00:17:44] that you recommend. And this the reason
[00:17:46] I'm spending so much time here is this
[00:17:47] is a really key part of your
[00:17:49] recommendation to help people build more
[00:17:51] successful AI products. this idea of
[00:17:54] start slow with high control and low
[00:17:57] agency and then build up over time once
[00:17:59] you've built confidence that it's doing
[00:18:00] the right sort of work. So a few more
[00:18:02] examples that you shared in your post
[00:18:03] that I'll just read. So say you're
[00:18:05] building a coding assistant. V1 would be
[00:18:07] just suggest inline completion and
[00:18:09] boilerplate snippets. V2 would be
[00:18:11] generate larger blocks like tests or
[00:18:13] refactors for humans to review. And then
[00:18:15] V3 is just apply the changes and open
[00:18:17] PRs autonomously.
[00:18:20] And then another example is a marketing
[00:18:21] assistant. So V1 would be draft emails
[00:18:23] or social copy just like here's what I
[00:18:25] would do. V2 is build a multi-step
[00:18:27] campaign and run the campaign and then
[00:18:30] launch and V3 is just launch it AB test
[00:18:33] it autooptimize campaigns across
[00:18:34] channels.
[00:18:36] >> Awesome.
[00:18:36] >> Yeah.
[00:18:38] >> And and again just to summarize where
[00:18:39] we're at just to give people the the
[00:18:41] advice we've shared so far. Uh one is
[00:18:44] just important to understand AI products
[00:18:47] are different. They're
[00:18:47] non-deterministic. And he pointed out
[00:18:49] and I forgot to actually mirror back
[00:18:50] this point both on the in on the input
[00:18:52] and the output the user experience is
[00:18:55] nondeterministic like people will see
[00:18:57] different things different outputs
[00:18:58] different chat conversations different
[00:19:00] maybe UI if it's designing the UI for
[00:19:02] you and also the output obviously is
[00:19:03] going to be nondeterministic so that's a
[00:19:05] problem and a challenge and then uh
[00:19:08] >> I mean if you think of it it's also the
[00:19:10] most beautiful part of AI which is I
[00:19:13] mean we're all much more comfortable
[00:19:15] talking than following a bunch of
[00:19:17] buttons and all of that right? So the
[00:19:19] bar to using AI products is much lower
[00:19:21] because you can be as natural as you
[00:19:23] would be with humans. But that's also
[00:19:25] the problem which is there are tons of
[00:19:28] ways we communicate. Um and it's you
[00:19:30] want to make sure that that intent is
[00:19:32] rightly communicated and the right
[00:19:34] actions are taken because most of your
[00:19:35] systems are deterministic and you want
[00:19:38] to achieve a deterministic outcome uh
[00:19:40] but with non-deterministic technology
[00:19:42] and that's where it gets a little messy.
[00:19:44] >> Awesome. Okay. That's a I love I love
[00:19:46] the the optimistic version of the why
[00:19:50] this is good. Okay. And then the other
[00:19:51] piece is this idea of this trade-off of
[00:19:53] autonomy versus control when you're
[00:19:55] designing a thing. And what I imagine
[00:19:56] what you're seeing is people try to jump
[00:19:58] to the ideal like the V3 immediately and
[00:20:02] that's when they get into trouble both.
[00:20:03] It's probably a lot harder to build that
[00:20:04] and it's just doesn't work and then
[00:20:06] they're just like okay this is a
[00:20:07] failure. What are we even doing?
[00:20:08] >> Exactly. I feel there's like a bunch of
[00:20:10] things that you actually have to uh get
[00:20:13] confidence in before you get to V3 and
[00:20:16] it's it's easy to get overwhelmed that
[00:20:17] oh my AI agent is like doing these
[00:20:20] things wrong in like 100 different ways
[00:20:22] and you're not going to actually
[00:20:23] tabulate all of them and fix it right
[00:20:25] even though you've learned like you know
[00:20:26] how do you deal with the uh evaluation
[00:20:29] practices and stuff like that. If you're
[00:20:30] starting on the wrong spot you are
[00:20:32] actually going to have a hard time like
[00:20:34] you know correcting things from there.
[00:20:35] And when you start uh small and when you
[00:20:38] start with building like a very
[00:20:40] minimalistic version with high human
[00:20:43] control and low agency, it also forces
[00:20:45] you to think about what is the problem
[00:20:47] that I'm going to solve. uh we we use
[00:20:49] this term called problem first and uh to
[00:20:53] me it was like obvious in the sense that
[00:20:55] yeah I I do need to think about the
[00:20:56] problem but it's incredible how well it
[00:20:58] resonates with the people that in all
[00:21:01] this advancements of the AI that we are
[00:21:03] seeing one easy slippery slope is to
[00:21:05] just keep thinking about uh complexities
[00:21:07] of the solution and not and forget the
[00:21:09] problem that you're trying to solve. So
[00:21:11] when you're trying to start at like a
[00:21:13] small at a smaller scale of autonomy,
[00:21:16] you start to really think about what is
[00:21:18] the problem that I'm trying to solve and
[00:21:19] how do I break it down into like levels
[00:21:22] of autonomy that I can build later. So
[00:21:24] that is incredibly useful when like and
[00:21:27] we keep repeating this pattern over and
[00:21:28] over with everyone we talk to.
[00:21:31] And there's so many other benefits to uh
[00:21:33] limiting autonomy because there there's
[00:21:35] just danger also of the thing doing too
[00:21:37] much for you and just messing up your I
[00:21:40] don't know your database sending out all
[00:21:42] these emails you never expected. There's
[00:21:43] like so many reasons this is a good
[00:21:44] idea.
[00:21:45] >> Yep. I I recently read this paper from a
[00:21:48] bunch of folks at UC Berkeley. um
[00:21:51] basically mate Zahara Stoker and the
[00:21:54] folks at data bricks and it said about
[00:21:57] 74 or 75% of the enterprises that they
[00:22:00] had spoken to um their biggest problem
[00:22:02] was reliability and that's also why they
[00:22:04] weren't uh comfortable um deploying
[00:22:08] products to their end users or building
[00:22:10] customerf facing products because they
[00:22:12] just weren't sure or they just weren't
[00:22:15] um comfortable doing that and exposing
[00:22:17] their users to a bunch of these risks,
[00:22:19] right? And that's also why they think a
[00:22:22] lot of AI products today have to do with
[00:22:24] productivity because it's much low
[00:22:26] autonomy versus you know end to end
[00:22:29] agents that would replace workflows. Um
[00:22:31] and yeah I love their work otherwise as
[00:22:33] well but I think that's very in line
[00:22:35] with what um at least we're seeing at my
[00:22:37] startup as well.
[00:22:38] >> Okay very interesting. There's an
[00:22:40] episode that'll come out before this
[00:22:41] conversation where we go deep into
[00:22:43] another problem that this avoids which
[00:22:46] is around uh prompt injection and
[00:22:48] jailbreaking and just how big of a
[00:22:51] >> uh ex risk that is for AI products where
[00:22:53] it's essentially an unsolved and
[00:22:55] unsolvable problem potentially. I'm not
[00:22:57] going to go down that track, but that's
[00:22:58] uh it's a pretty scary conversation we
[00:23:00] had that it'll be out before this
[00:23:01] conversation.
[00:23:02] >> I think that will be a huge problem once
[00:23:04] systems go mainstream. We're still so
[00:23:07] busy building AI products that we're not
[00:23:09] worried about security, but it it will
[00:23:12] be um such a huge problem to kind of u
[00:23:15] especially with this non-deterministic
[00:23:17] API again, right? So, you're kind of
[00:23:19] stuck because um there are tons of
[00:23:21] instructions that you could inject
[00:23:24] within your prompt and then yeah, it's
[00:23:26] it's going to be bad. Okay, I let's
[00:23:29] actually spend a little time here
[00:23:30] because it's actually really interesting
[00:23:31] to me and no one's talking about this
[00:23:32] stuff which is like the conversation we
[00:23:35] had is just it's pretty easy to get AI
[00:23:37] to trick to do stuff it shouldn't do and
[00:23:39] there's all these guardrail systems
[00:23:41] people put in place but turns out these
[00:23:43] guardrails aren't actually very good and
[00:23:45] you can always get around them and to
[00:23:47] your point as agents become more
[00:23:48] autonomous and robots uh it gets pretty
[00:23:51] scary that you could get AI to do things
[00:23:53] you shouldn't do. I think this is
[00:23:55] definitely a problem. But I feel in the
[00:23:57] current spectrum of like customers
[00:23:59] adopting AI, the the extent to which
[00:24:03] like you know companies can actually get
[00:24:05] advantage of AI or like improve their
[00:24:07] processes or like you know streamline
[00:24:09] the existing processes that they have. I
[00:24:12] feel it's in still in the very early
[00:24:14] stage like 2025 has been an extremely
[00:24:16] busy year for AI agents and customers
[00:24:19] trying to adopt AI. But I feel the
[00:24:21] penetration is still not as much as you
[00:24:23] would actually get advantage out of it.
[00:24:25] So with the right sort of you know human
[00:24:28] in the loop uh points in here I feel we
[00:24:31] can actually avoid a bunch of these
[00:24:32] things and focus more towards like
[00:24:34] streamlining the processes and I I am
[00:24:37] more on the optimist side in the sense
[00:24:39] that like you need to try and adopt this
[00:24:41] before actually like trying to be only
[00:24:44] highlighting the negative aspects of
[00:24:46] like what could go wrong. So I I feel
[00:24:48] like strongly u that companies has to
[00:24:51] adopt this. They definitely like no
[00:24:53] company uh at openi we talked to is has
[00:24:57] never had been the case that oh AI
[00:24:59] cannot help me in this case. It has
[00:25:00] always been that oh there is this like
[00:25:01] set of things that it can uh optimize
[00:25:04] for me and then let me see how I can
[00:25:05] adopt it. Sweet. I always like the
[00:25:07] optimistic perspective. I'm excited to
[00:25:09] for you to listen to this and see what
[00:25:10] you think because it's really
[00:25:11] interesting and uh and to your point
[00:25:13] there's a lot of things to focus on.
[00:25:14] It's one of one of many things to worry
[00:25:16] about and think about. Okay, let's get
[00:25:18] back on track here. So, we've shared a
[00:25:20] bunch of pro tips and important piece of
[00:25:22] advice. Let me ask, what other patterns
[00:25:25] and kind of ways of working do you see
[00:25:28] in companies that do this well and teams
[00:25:30] that build AI products successfully? And
[00:25:33] then just what are the most common
[00:25:35] pitfalls people fall into? So, we could
[00:25:37] just maybe start with what are other
[00:25:39] ways that companies do this well, build
[00:25:41] AI products successfully? I almost think
[00:25:44] of it as like a success triangle with
[00:25:48] three dimensions. It's never always
[00:25:50] technical. Every technology problem is a
[00:25:52] people problem first. And with companies
[00:25:55] that we have worked with, it's these
[00:25:57] three dimensions, right? Like great
[00:25:58] leaders, good culture and technical
[00:26:01] progress. Um with leaders itself, we
[00:26:05] work with a lot of companies uh for
[00:26:07] their AI transformation, training,
[00:26:09] strategy and stuff like that. And I feel
[00:26:12] like um a lot of companies the leaders
[00:26:15] have built intuitions over 10 or 15
[00:26:17] years and they are kind of highly
[00:26:19] regarded for those intuions but now with
[00:26:21] AI in the picture those intuions will
[00:26:24] have to be relearned and leaders have to
[00:26:26] be vulnerable to do that right. Um I
[00:26:28] used to work with the CEO of now
[00:26:30] Rackspace Gajen. So he would um have
[00:26:35] this block every day in the morning
[00:26:36] which would say catching up with AI 4 to
[00:26:39] 6:00 a.m. and he would not have any
[00:26:41] meetings or anything like that and that
[00:26:42] was just his time to pick up on the
[00:26:44] latest AI um you know podcast or
[00:26:47] information and all of that and he would
[00:26:49] have um weekend white coding sessions
[00:26:51] and stuff like that. So I think leaders
[00:26:53] have to get back to being hands-on and
[00:26:56] that's not because they have to be
[00:26:57] implementing these things but more of uh
[00:27:00] rebuilding their intuitions because you
[00:27:02] must be comfortable with the fact that
[00:27:04] your intuitions might not be right. Um
[00:27:06] and you you probably are the dumbest
[00:27:08] person in the room and you want to learn
[00:27:09] from everyone. Um and that I've seen
[00:27:12] that being a very um distinguishing
[00:27:14] factor of companies that build products
[00:27:18] um which are successful because you're
[00:27:19] kind of bringing in that top down
[00:27:20] approach. It's almost always impossible
[00:27:23] for it to be bottom up. You can't have a
[00:27:26] bunch of engineers go and get buyin from
[00:27:28] the leader if they just don't trust in
[00:27:30] the technology or if they have
[00:27:32] misaligned expectations about the
[00:27:33] technology. Right? I've heard from so
[00:27:35] many folks who are building that our
[00:27:37] leaders just don't understand the extent
[00:27:39] to which AI can solve a particular
[00:27:41] problem or they just white code
[00:27:43] something and assume it's easy to take
[00:27:44] it to production and you really need to
[00:27:46] understand the range of what AI can
[00:27:48] solve today so that you can guide
[00:27:49] decisions within the company. The second
[00:27:52] one is the culture itself, right? And
[00:27:54] again, I work with enterprises where AI
[00:27:57] is not their main thing and they have um
[00:28:00] they need to bring in AI into their
[00:28:02] processes just because a competitor is
[00:28:03] doing it and just because it does make
[00:28:05] sense because there are use cases that
[00:28:07] are very ripe. Then along the way, I
[00:28:10] feel a lot of companies have this
[00:28:11] culture of FOMO and you will be replaced
[00:28:14] and those kind of things and people get
[00:28:15] really afraid. um subject matter experts
[00:28:18] are such a huge part of building AI
[00:28:21] products that work because you really
[00:28:22] need to consult them to understand how
[00:28:24] your AI is behaving or what the ideal
[00:28:26] behavior should be. But then I have
[00:28:28] spoken to a bunch of companies where the
[00:28:30] subject matter experts just don't want
[00:28:31] to talk to you because they think their
[00:28:33] job is being replaced. So as I mean
[00:28:36] again this comes from the leader itself.
[00:28:38] want to build a culture of empowerment
[00:28:41] of um augmenting AI into your own
[00:28:44] workflows so that you know you can 10x
[00:28:46] what you're doing instead of saying that
[00:28:48] you know probably uh you'll be replaced
[00:28:50] if you don't adopt AI and stuff like
[00:28:52] that. So that kind of an empowering
[00:28:53] culture always helps you want to make um
[00:28:56] your entire organization be in it
[00:28:59] together and make AI work for you
[00:29:00] instead of trying to you know guard
[00:29:03] their own jobs etc. And with AI, it's
[00:29:05] also true that it opens up a lot more
[00:29:07] opportunities than before. So you could
[00:29:10] have your employees doing a lot more
[00:29:11] things than before and 10x their
[00:29:13] productivity. Um, and the third one is
[00:29:16] the technical part which we talk about,
[00:29:18] right? I think folks that are successful
[00:29:20] are incredibly obsessed about
[00:29:23] understanding their workflows very well
[00:29:25] and augmenting parts um that could be um
[00:29:30] um that could be ripe for AI versus the
[00:29:32] ones that might need human in the loop
[00:29:34] somewhere etc. Whenever you're uh trying
[00:29:37] to automate some part of a workflow,
[00:29:40] it's never the case that you could you
[00:29:43] could use an AI agent and that will kind
[00:29:44] of solve your uh problems, right? It's
[00:29:47] always you probably have a machine
[00:29:49] learning uh model that's going to do
[00:29:51] some part of the job. You have
[00:29:52] deterministic code doing some part of
[00:29:53] the job. So you really need to be
[00:29:55] obsessed with understanding that
[00:29:56] workflow so you can choose the right
[00:29:58] tool for the problem instead of being
[00:29:59] obsessed with the technology itself. And
[00:30:03] um another pattern I see is also folks
[00:30:06] really understand this idea of working
[00:30:09] with a non-deterministic API which is
[00:30:11] your LLM. And what that means is they
[00:30:14] also understand the development life
[00:30:16] cycle looks very different and they
[00:30:18] iterate pretty quickly which is can I um
[00:30:20] can I build something iterate uh quickly
[00:30:23] in a way that it doesn't ruin my
[00:30:25] customer experience at the same time
[00:30:27] gives me enough amount of data so that I
[00:30:30] can estimate behavior right so they
[00:30:31] build that flywheel very quickly as of
[00:30:34] today it's not about being the first
[00:30:36] company to have an agent among your
[00:30:37] competitors it's about have you built
[00:30:39] the right flywheels in place so that you
[00:30:41] can improve over time
[00:30:42] When someone comes up to me and says,
[00:30:44] "We have this one-click agent. It's
[00:30:46] going to be deployed in your system and
[00:30:47] then in two or three days it'll start
[00:30:49] showing you significant gains," I would
[00:30:51] almost be skeptical because it's just
[00:30:53] not possible. And that's not because the
[00:30:55] models aren't there, but because
[00:30:57] enterprise data and infrastructure is
[00:30:59] very messy and you need a bit to even
[00:31:02] the agent needs a bit to understand um
[00:31:04] how these systems work. There are very
[00:31:07] messy taxonomies everywhere. um people
[00:31:10] tend to do things like get customer data
[00:31:13] wi1 get customer data w2 and these kind
[00:31:15] of things and all those functions exist
[00:31:18] and um they are being called and there's
[00:31:20] basically there's a lot of tech debt
[00:31:22] that you need to deal with. So most of
[00:31:24] the times if you're obsessed with the
[00:31:26] problem itself and you understand your
[00:31:28] workflows very well you will know how to
[00:31:30] improve your agents over time instead of
[00:31:32] just slapping an agent and assuming that
[00:31:34] it'll work from day one. I probably will
[00:31:36] go as far to say that if someone's
[00:31:38] selling you one click agents, it's it's
[00:31:40] pure marketing. You don't want to buy
[00:31:42] into that. I would rather go with a
[00:31:44] company that says we're going to build
[00:31:45] this pipeline for you and that that will
[00:31:47] learn over time and kind of build a
[00:31:49] flywheel to improve than something
[00:31:51] that's going to work out of the box to
[00:31:53] replace any critical workflow or to um
[00:31:56] build something that can give you
[00:31:58] significant ROI easily takes four to six
[00:32:00] months of work. Even if you have the
[00:32:02] best data layer and infrastructure
[00:32:04] layer. Amazing. There's a lot there that
[00:32:06] resonates so deeply with other
[00:32:07] conversations I've been having on this
[00:32:09] podcast. One is just for a company to be
[00:32:12] successful at seeing a lot of impact
[00:32:13] from AI, the founder CEO has to be deep
[00:32:17] into it. Uh I had Dan Shipper on the
[00:32:19] podcast and they work with a bunch of
[00:32:21] companies helping them adopt AI and he
[00:32:23] said that's the number one predictor of
[00:32:24] success is the CEO chatting with Chad
[00:32:27] GPT, Claude, whatever uh many times a
[00:32:30] day. I love this example you gave the
[00:32:32] Rackspace as like catch up on AI news in
[00:32:34] the morning every day. I was imagining
[00:32:36] he'd be like chatting with like the
[00:32:38] chatbot versus uh like reading news.
[00:32:42] >> With the kind of information you have as
[00:32:43] of today, you could just um I mean you
[00:32:46] want to choose the right um channels as
[00:32:49] well because everybody has an opinion.
[00:32:51] So whose opinion do you want to bank on?
[00:32:53] I feel like having that good quality set
[00:32:56] of people that you're listening to
[00:32:58] really makes sense. So he just has a
[00:33:00] list of two or three sources that he
[00:33:02] always looks at and and then he comes
[00:33:04] back with a bunch of questions and
[00:33:06] bounces it around with a bunch of AI
[00:33:08] experts to see what they think about it.
[00:33:09] And I was part of that group so I kind
[00:33:11] of know um
[00:33:12] >> I love that
[00:33:12] >> about the questions that he comes up
[00:33:14] with. So that's cool.
[00:33:15] >> It's pretty cool. I was like why are you
[00:33:16] doing so much? And then he says it
[00:33:18] trickles down into a bunch of decisions
[00:33:20] that we take.
[00:33:21] >> Okay, let me talk about another topic
[00:33:23] that's very it's been a hot topic on
[00:33:24] this podcast. It was a hot topic on
[00:33:26] Twitter for a while. Evals.
[00:33:29] A lot of people are obsessed with evals,
[00:33:31] think they're the solution to a lot of
[00:33:33] problems in AI. A lot of people think
[00:33:35] they're overrated, that well, you don't
[00:33:37] need evals. You can just feel the vibes
[00:33:39] and you'll you'll be all right. What's
[00:33:41] your take on evals? How far does that
[00:33:44] take people in solving a lot of the
[00:33:46] problems that you talk about in terms of
[00:33:48] like what is going on in the community?
[00:33:50] I I feel there's this false dichotomy of
[00:33:52] like there's either eval is going to
[00:33:55] solve everything or online monitoring or
[00:33:57] production monitoring is going to solve
[00:33:59] everything and I find no reason to trust
[00:34:02] like one of the extremes in the sense
[00:34:04] that I will entirely bank my application
[00:34:06] on this and or like that to solve the uh
[00:34:09] thing right so if you take a step back
[00:34:11] uh think of what are eval are basically
[00:34:14] your uh trusted product thinking or like
[00:34:18] your knowledge about the product that is
[00:34:20] going into this uh set of data sets that
[00:34:22] you're going to build in the sense that
[00:34:24] this is what matters to me like this is
[00:34:26] the kind of problems that my agent
[00:34:28] should not do and let me build a list of
[00:34:31] data sets so that I'm going to do well
[00:34:33] on those and in terms of production
[00:34:35] monitoring what you're doing doing there
[00:34:37] is uh you're deploying your application
[00:34:39] and then you're having this some sort of
[00:34:41] key metrics that actually communicate
[00:34:44] back to you on how customers are using
[00:34:46] your product like you could be deploying
[00:34:48] uh any agent And like if the C customer
[00:34:50] is giving a thumbs up for your
[00:34:52] interaction, you better want to know
[00:34:53] that. So that is what production
[00:34:55] monitoring is going to do, right? And
[00:34:56] this production monitoring has existed
[00:34:58] for products like for a long time just
[00:35:01] that now with AI agents, you need to be
[00:35:03] monitoring like a lot more granularity.
[00:35:06] It's not just the customer always giving
[00:35:08] you explicit feedback, but there is many
[00:35:10] implicit feedback that you can get. Uh
[00:35:12] for example, in chat GPD, right? Like if
[00:35:14] you are uh liking the answer you can
[00:35:16] actually give a thumbs up or if you
[00:35:18] don't like the answer sometimes
[00:35:19] customers don't give you thumbs down but
[00:35:21] actually re regenerate the answer. So
[00:35:23] that is an clear indication that the
[00:35:25] initial answer that you generated is not
[00:35:27] matting uh meeting the customer's
[00:35:29] expectation. Right. So these are the
[00:35:31] kind of implicit signals you always need
[00:35:34] to think about and that spectrum has
[00:35:36] been increasing in terms of production
[00:35:37] monitoring. Now let's come back to the
[00:35:40] initial topic of like okay is it eval or
[00:35:42] is it production monitoring? What does
[00:35:44] it matter? So I feel again we go back to
[00:35:47] this problem first approach of what is
[00:35:49] your what is it that you're trying to
[00:35:51] build like you're trying to build a
[00:35:52] reliable application for your customers
[00:35:54] that's not going to do a bad thing like
[00:35:56] it's always going to do the right thing
[00:35:57] or if it is doing a wrong thing you are
[00:36:00] uh you're basically alerted like very
[00:36:03] quickly right so the I break this down
[00:36:05] into two parts like one is you like
[00:36:08] nobody goes into uh deploying an
[00:36:11] application without actually like you
[00:36:12] know just testing that this testing
[00:36:14] could be wipes or this testing could be
[00:36:16] okay I have this like 10 questions that
[00:36:19] it should not go wrong any no matter
[00:36:21] what changes I make and let me build
[00:36:22] this and let's call this an evaluation
[00:36:24] data set now let's say you built this
[00:36:26] you deployed this and then you figured
[00:36:28] uh okay now I need to understand whether
[00:36:30] it's doing the right thing or not so if
[00:36:32] you're a high uh high uh throughput or
[00:36:35] like a high transaction customer you
[00:36:38] cannot practically sit and evaluate all
[00:36:40] the traces right you need some
[00:36:42] indication to understand what are the
[00:36:43] things that I should look at and this is
[00:36:45] where production monitoring comes into
[00:36:46] the picture that you cannot predict your
[00:36:49] uh the base in which your agent could be
[00:36:51] doing wrong but all of these other
[00:36:52] implicit signals and explicit signals
[00:36:55] those are going to communicate back to
[00:36:56] you what uh what are the traces that you
[00:36:59] need to look at and that is where
[00:37:00] production monitoring helps and once you
[00:37:02] get this kind of traces you need to
[00:37:05] examine what are the failure patterns
[00:37:07] that you're seeing in these uh different
[00:37:09] types of interactions and is there
[00:37:11] something that I really care about that
[00:37:13] should not happen and if that kind of
[00:37:15] failure modes are happening then I need
[00:37:17] to think about building an evaluation
[00:37:18] data set for it and okay let's say I
[00:37:21] built an evaluation data set for my
[00:37:23] agent trying to offer refunds where
[00:37:27] explicitly I have configured it not to
[00:37:29] so I built this evaluation data set and
[00:37:31] then like I made my changes in tools or
[00:37:34] prompts or whatever and then I deployed
[00:37:36] the second version of the product right
[00:37:38] now uh there is no guarantee that this
[00:37:40] is the only problem that you're going to
[00:37:42] see you still need production monitoring
[00:37:44] to actually have like you know catch
[00:37:46] different kinds of problems that you
[00:37:47] might encounter. So I feel eval are
[00:37:50] important, production monitoring is
[00:37:51] important but this notion of only one of
[00:37:53] them is going to solve things for you
[00:37:55] that is uh completely dismissible in my
[00:37:57] opinion.
[00:37:58] >> All right, a very reasonable answer and
[00:38:00] the point here isn't uh it's not just as
[00:38:02] simple as do both. It's more that there
[00:38:04] are different things to catch and one
[00:38:08] approach won't catch all the things you
[00:38:09] need to be paying attention to.
[00:38:11] >> Exactly. Awesome.
[00:38:13] >> I want to take two steps back and kind
[00:38:15] of talk about how much weight the term
[00:38:18] evals has had to take in the second, you
[00:38:20] know, half of 2025
[00:38:23] because you go meet a data labeling
[00:38:24] company and they tell you our experts
[00:38:26] are writing evals. And then uh you have
[00:38:29] all of these uh folks saying that PMS
[00:38:31] should be writing evals. They're the new
[00:38:33] PRDS. And then you have folks saying
[00:38:35] that um eval is pretty much everything
[00:38:38] which is the feedback loop you're
[00:38:39] supposed to be building to improve your
[00:38:40] products. Now step back as a beginner
[00:38:43] and kind of think like what are evals?
[00:38:45] Why is everyone saying eval? And these
[00:38:47] are actually different parts of the
[00:38:48] process and nobody's wrong in the sense
[00:38:50] that yes these are eval but when a data
[00:38:53] labeling company is telling you that our
[00:38:55] um experts are writing evals they're
[00:38:56] actually referring to error analysis or
[00:38:59] you know experts just leading notes on
[00:39:01] what should be right. Lawyers and
[00:39:03] doctors write evals that doesn't mean
[00:39:05] they're building LLM judges or they're
[00:39:07] building this entire feedback loop. And
[00:39:09] when you say that a PM should be writing
[00:39:11] evals doesn't mean they have to write an
[00:39:13] LLM judge that's good enough for
[00:39:15] production. I think there's there are
[00:39:17] also very prescriptive ways of doing
[00:39:19] this and plus one to KD which is you
[00:39:22] cannot predict up front if you need to
[00:39:25] be building an LLM judge versus you need
[00:39:27] to be using um implicit signals from
[00:39:29] production monitoring etc. I think
[00:39:32] Martin Fowler at some point had this
[00:39:33] term called semantic diffusion back in
[00:39:36] the 2000s. Um um which kind of means
[00:39:39] that someone comes up with a term
[00:39:40] everybody starts butchering it with
[00:39:42] their own definitions and then you kind
[00:39:43] of lose the actual definition of it.
[00:39:46] That is kind of what is happening to
[00:39:47] eval
[00:39:50] of today. Everybody kind of sees a
[00:39:51] different side to it I guess. Um but if
[00:39:54] you make a bunch of practitioners sit
[00:39:55] together and ask them is it important to
[00:39:57] build a actionable feedback loop for AI
[00:40:00] products I think all of them will agree.
[00:40:02] Now how you do that really depends on
[00:40:05] your application itself when you go to
[00:40:07] complex use cases it's incredibly hard
[00:40:10] to build LM judges because you see a lot
[00:40:12] of emerging patterns. If you built a
[00:40:14] judge that would um you know test for
[00:40:17] verbosity or something like that, you
[00:40:18] turns out that you're seeing newer
[00:40:20] patterns that your LM judge is not able
[00:40:22] to catch and then you're just um you
[00:40:24] just end up building too many evals and
[00:40:26] at that point it just makes sense to you
[00:40:28] know look at your user signals, fix
[00:40:30] them, check if you've regressed and move
[00:40:32] on instead of actually building these
[00:40:33] judges. Um so it all depends. I think
[00:40:36] one statement that every ML practitioner
[00:40:39] will tell you is it really depends on
[00:40:41] the context. Don't be obsessed with
[00:40:43] prescriptions. They're going to change.
[00:40:45] >> Uh that's such an important point. This
[00:40:46] idea that especially that eval just
[00:40:48] means many things to different people
[00:40:50] now. It's just like a term for so many
[00:40:52] things. And uh it it's complicated to
[00:40:55] just talk about evals when you're think
[00:40:56] when you see it as the stuff data
[00:40:57] labeling companies are giving you and
[00:40:59] things are right. And there's also
[00:41:00] benchmarks. People call benchmarks a
[00:41:02] little bit eval. It's like
[00:41:03] >> I I recently spoke to a client who told
[00:41:05] me we do eval
[00:41:06] >> and I was like okay can you show me your
[00:41:08] data set? and said, "No, we just checked
[00:41:09] LM arena and artificial analysis. These
[00:41:12] are, you know, independent benchmarks
[00:41:14] and we know that this model is the right
[00:41:16] one for our use case." And I'm like,
[00:41:18] "You're not doing eval. That's not eval.
[00:41:20] Those are model."
[00:41:20] >> That makes sense. Like the word, you
[00:41:22] know, like could be used in that
[00:41:23] context. I get why people think that,
[00:41:24] but yeah, now it's just confusing it
[00:41:25] even more.
[00:41:26] >> Yep.
[00:41:27] >> Just like one more line of questioning
[00:41:28] here that I think uh that's on my mind
[00:41:30] is the reason this became kind of a big
[00:41:32] debate is cloud code, the head of cloud
[00:41:34] code, Boris, was like, "Nah, we don't do
[00:41:36] evalance on cloud code. It's all vibes.
[00:41:38] What can you share kiti on codex and the
[00:41:41] codeex team of how you approach evals?
[00:41:43] So CEX we have like this balanced
[00:41:45] approach of like you know you need to
[00:41:47] have eval and you need to definitely
[00:41:49] listen to your customers and I think
[00:41:52] Alex has been on your podcast recently
[00:41:54] and he's been talking about how we
[00:41:56] extremely focused on building the right
[00:41:57] product right and a part of a big part
[00:42:00] of it is basically listening to your
[00:42:02] customers and coding agents are
[00:42:04] extremely unique compared to agents for
[00:42:06] other domains in the sense that these
[00:42:08] are actually built for customizability
[00:42:10] and these are built for engineers. So
[00:42:12] coding agent is not a product which is
[00:42:14] going to solve like these top five
[00:42:16] workflows or like top six workflows or
[00:42:18] whatever right it's meant to be
[00:42:20] customizable in multi different ways and
[00:42:22] the implication of that is that your
[00:42:25] product is going to be used in different
[00:42:28] integrations and different kinds of
[00:42:29] tools and different kinds of things. So
[00:42:31] it gets really hard to build an
[00:42:33] evaluation data set for all kinds of
[00:42:35] interactions that your customers are
[00:42:37] going to use your product for. Right?
[00:42:39] But that said, you also need to
[00:42:40] understand that okay, if I'm going to
[00:42:42] make a change, it's at least not going
[00:42:44] to like damage something that is really
[00:42:46] core to the product. So we have like
[00:42:48] evaluations uh for doing that. At the
[00:42:51] same time, we have we take like extreme
[00:42:53] care on like understanding how the
[00:42:54] customers are using it. For example,
[00:42:57] uh we built this code review product
[00:42:59] recently and uh it has been gaining like
[00:43:02] extreme amount of traction and uh I feel
[00:43:04] like many many bugs in OpenAI as well as
[00:43:07] like even external customers are getting
[00:43:08] caught with this. And now let's say if
[00:43:10] I'm making a model change to the course
[00:43:12] review or like a different kinds of uh
[00:43:15] RL mechanism that I trained with it and
[00:43:18] now if I'm going to deploy it I
[00:43:20] definitely do want to AP test and
[00:43:22] identify whether it's actually finding
[00:43:24] the right uh mistakes and are users how
[00:43:27] are users reacting to it and sometimes
[00:43:29] like if users do get annoyed by your
[00:43:31] like you know uh incorrect code riggers
[00:43:33] they go to the extent of just switching
[00:43:35] off the product right so those are the
[00:43:36] signals that you want to look at and
[00:43:38] make sure that your new changes are
[00:43:40] doing the right thing and it's extremely
[00:43:42] hard for us to you know uh think of
[00:43:44] these kind of scenarios beforehand and
[00:43:47] uh develop evaluation data sets for it.
[00:43:49] So I feel like there's a bit of both
[00:43:51] like there's a lot of wipes and there's
[00:43:52] a lot of like customer feedback and we
[00:43:55] are super active on like the social
[00:43:56] media to understand if anybody's having
[00:43:58] certain types of problems and quickly
[00:44:00] fix that. So I feel it's a it's a um how
[00:44:05] do I put this? It's like a domain of
[00:44:06] things that you do here. That makes so
[00:44:09] much sense. Okay, what I'm hearing Codex
[00:44:10] Pro evals, but it's not enough. You need
[00:44:12] to Yes. But also, uh, just watch
[00:44:15] customer behavior and feedback and also
[00:44:17] there's some vibes just like is this
[00:44:19] feeling good? Is this as I'm using it
[00:44:21] generating great code that I'm excited
[00:44:23] about that I think is great.
[00:44:24] >> I I don't think like if anybody's coming
[00:44:26] and saying that like my I have this
[00:44:28] concrete set of evas that I can like bet
[00:44:30] my life on and then I don't need to
[00:44:32] think about anything else like it it's
[00:44:34] not going to work. And every new model
[00:44:36] that we're going to launch, we uh get
[00:44:38] together as a team and like you know
[00:44:39] test different things each each person
[00:44:42] is like concentrating on something else
[00:44:44] and like we have this list of hard
[00:44:45] problems that we have and we throw that
[00:44:47] to the model and see how well they are
[00:44:49] progressing. So it's like uh custom
[00:44:51] evals for each engineer you would say
[00:44:53] and just like understand what the uh
[00:44:55] product is doing in this new model.
[00:44:58] If you're a founder, the hardest part of
[00:45:00] starting a company isn't having the
[00:45:01] idea. It's scaling the business without
[00:45:04] getting buried in back office work.
[00:45:06] That's where Brex comes in. Brex is the
[00:45:08] intelligent finance platform for
[00:45:10] founders. With Brex, you get high limit
[00:45:12] corporate cards, easy banking, high
[00:45:14] yield treasury, plus a team of AI agents
[00:45:17] that handle manual finance tasks for
[00:45:19] you. They'll do all the stuff that you
[00:45:22] don't want to do, like file your
[00:45:24] expenses, scour transactions for waste,
[00:45:26] and run reports, all according to your
[00:45:29] rules. With Brex AI agents, you can move
[00:45:32] faster while staying in full control.
[00:45:34] One in three startups in the United
[00:45:36] States already runs on Brex. You can,
[00:45:39] too, at brex.com.
[00:45:43] We've been talking for almost an hour
[00:45:44] already and we haven't even covered your
[00:45:46] extremely powerful software development
[00:45:49] workflow for building AI products that
[00:45:51] you two developed that you teach in your
[00:45:53] course that you basically combines all
[00:45:54] the stuff we've been talking about into
[00:45:57] a step-by-step approach to building AI
[00:46:00] products. You call it the continuous
[00:46:02] calibration, continuous development
[00:46:04] framework. Let's pull up a visual to
[00:46:07] show people what the heck we're talking
[00:46:08] about and then just walk us through what
[00:46:10] this is, how this works, how teams can
[00:46:12] shift the way they build their AI
[00:46:13] products to this approach to help them
[00:46:16] avoid a lot of pain and suffering.
[00:46:18] >> Before we go about explaining um the
[00:46:21] life cycle, a quick story on why Kita
[00:46:23] and I came up with this is because um
[00:46:26] there are tons of u uh companies that we
[00:46:29] keep talking to that have the pressure
[00:46:31] from their competitors because they're
[00:46:33] all building agents. we should be
[00:46:34] building agents that are entirely
[00:46:35] autonomous. And we I did end up working
[00:46:38] with a few customers where we built
[00:46:41] these end-to-end agents. And turns out
[00:46:43] that because you start off at a place
[00:46:45] where you don't know how the user might
[00:46:48] interact with your system and what kind
[00:46:50] of responses or actions the AI might
[00:46:52] come up with, it's really hard to fix
[00:46:55] problems when you have this really huge
[00:46:57] workflow which is taking four or five
[00:46:58] steps, making tons of decisions. you're
[00:47:00] you just you just end up debugging so
[00:47:03] much and then kind of hot fixing to the
[00:47:06] point where at at a time we were
[00:47:07] building for a customer support um use
[00:47:09] case which is what which is the example
[00:47:11] that we give in the newsletter as well
[00:47:13] and we to shut down the product because
[00:47:15] we were doing so many hot fixes and
[00:47:17] there was no way we could um count all
[00:47:19] the emerging or emerging problems that
[00:47:21] were coming up right and there's also
[00:47:24] quite some news online um recently I
[00:47:28] think Air Canada had this thing where um
[00:47:30] one of their agents predicted or
[00:47:33] hallucinated a policy um for a refund
[00:47:35] which was not part of their original
[00:47:37] playbook and they had to go by it
[00:47:39] because legal stuff and there have been
[00:47:41] a ton of really uh scary incidents and
[00:47:45] that's where the idea comes from right
[00:47:47] how can you build so that um you don't
[00:47:49] lose customer trust and you don't end up
[00:47:52] or your agent or um AI system doesn't
[00:47:54] end up making decisions that are super
[00:47:56] dangerous to the company itself at the
[00:47:59] same time build a flywheel so that you
[00:48:01] can improve your product as you go right
[00:48:03] and that's why we came up with this idea
[00:48:05] of continuous calibration continuous
[00:48:07] development. The idea is pretty simple
[00:48:09] which is um we have this right side of
[00:48:11] the loop which is continuous development
[00:48:14] uh where you scope capability and curate
[00:48:17] data essentially get a data set of what
[00:48:19] your expected inputs are and what um
[00:48:22] your expected outputs should be looking
[00:48:24] at. This is a very good exercise before
[00:48:26] you start building any AI product
[00:48:28] because many times you figure out that a
[00:48:31] lot of the folks within the team are
[00:48:32] just not aligned on how the product
[00:48:34] should behave and that's where your PMS
[00:48:36] can really give in a lot more
[00:48:37] information and your subject matter
[00:48:39] experts as well. So you have this data
[00:48:41] set that you know um your AI product
[00:48:43] should be doing really well on. It's
[00:48:45] it's not comprehensive but it lets you
[00:48:47] get started and then you set up the
[00:48:49] application and then design the right
[00:48:51] kind of evaluation metrics and I
[00:48:53] intentionally use the term evaluation
[00:48:56] metrics although we say eval because I
[00:48:57] just want to be very specific on what it
[00:48:59] is because evaluation is a process
[00:49:01] evaluation metrics are dimensions that
[00:49:03] you want to focus on um during the
[00:49:06] process right and then you go about
[00:49:08] deploying um run your evaluation metrics
[00:49:10] um and the second part is the continuous
[00:49:14] calibration which is the part where you
[00:49:16] understand what um behavior you hadn't
[00:49:20] expected in the beginning, right?
[00:49:22] Because when you start the development
[00:49:24] process, you have this data set that
[00:49:26] you're optimizing for, but more often
[00:49:29] than not, you realize that that data set
[00:49:31] is not comprehensive enough. Um because
[00:49:33] users start behaving with your systems
[00:49:35] in ways that you did not predict. And
[00:49:37] that's where you want to do the
[00:49:38] calibration piece. Right? I've deployed
[00:49:41] my system. Now I see that there are
[00:49:42] patterns that I did not really expect
[00:49:45] and your evaluation metrics should give
[00:49:47] you some insight into that into those
[00:49:49] patterns. But sometimes you figure out
[00:49:50] that those metrics were also not enough
[00:49:52] and you probably have new error patterns
[00:49:54] that you've not thought about and that's
[00:49:56] where you analyze your behavior, spot
[00:49:58] error patterns. You apply fixes for
[00:50:00] issues that you see but you also design
[00:50:02] newer evaluation metrics. to figure out
[00:50:04] that they are emerging patterns. And
[00:50:07] that doesn't mean you should always
[00:50:10] design evaluation metrics. There are
[00:50:11] some errors that you can just fix and
[00:50:13] not really come back to uh because
[00:50:15] they're very spot errors. For instance,
[00:50:17] there's a there's a a tool calling error
[00:50:19] just because your tool wasn't defined
[00:50:21] well and stuff like that. You can just
[00:50:23] fix it and move on, right? And this is
[00:50:25] pretty much how an AI product life cycle
[00:50:28] would look like. But what we
[00:50:30] specifically also mention is while
[00:50:32] you're going through these iterations,
[00:50:34] try to think of lower agency iterations
[00:50:38] in the beginning um and higher control
[00:50:40] iterations. What that means is constrain
[00:50:43] the number of decisions your AI systems
[00:50:45] can make and um make sure that they're
[00:50:48] humans in the loop and then increase
[00:50:50] that over time because you're kind of
[00:50:51] building a flywheel of behavior and uh
[00:50:54] you're understanding what kind of use
[00:50:56] cases are coming in or how your users
[00:50:58] are using the system right and one
[00:51:00] example I think we give in the
[00:51:01] newsletter itself is um the customer
[00:51:04] support this is a nice image that kind
[00:51:06] of shows how you can think of agency and
[00:51:08] control as two dimensions and each of
[00:51:11] your versions keep on increasing the
[00:51:13] agency or the ability of your AI system
[00:51:16] to make decisions and lower the control
[00:51:18] as you go. And one example that we give
[00:51:20] is that of the u customer support agent
[00:51:24] where you can break it down into three
[00:51:26] versions. The first version is just
[00:51:27] routing which is is your agent able to
[00:51:30] classify and route a particular ticket
[00:51:33] to the right department. And sometimes
[00:51:35] when you read this you probably think is
[00:51:37] it so hard to just do routing? Why can't
[00:51:39] an agent easily do that? And when you go
[00:51:42] to enterprises, routing itself can be a
[00:51:45] super complex problem. Any retail
[00:51:47] company, any popular retail company that
[00:51:49] you can think of has hierarchical
[00:51:51] taxonomies. Most of the times the
[00:51:53] taxonomies are incredibly messy. I have
[00:51:56] worked in you know use cases where you
[00:51:58] probably have taxonomy that says um you
[00:52:01] know some tax um some kind of hierarchy
[00:52:03] and then that says shoes and then
[00:52:05] women's shoes and men's shoes all at the
[00:52:07] same layer where idea you should be
[00:52:10] having shoes and then women's shoes and
[00:52:12] men's shoes should be sub uh you know
[00:52:14] classes right and then you're like okay
[00:52:16] fine I could just merge that and you go
[00:52:17] further and you see that there's also
[00:52:19] another section under shoes that says
[00:52:21] for women and for men and it's just not
[00:52:23] aggregated it's not uh fixed for some
[00:52:25] reason. So if an agent kind of sees this
[00:52:28] kind of a taxonomy, what is it supposed
[00:52:29] to do? Where is it supposed to route and
[00:52:32] a lot of the times we are not aware of
[00:52:33] these problems until you actually go
[00:52:35] about building something and
[00:52:37] understanding it, right? So um and when
[00:52:40] these kind of problems um real human
[00:52:42] agents see these kind of problems, they
[00:52:44] know what to check next. U maybe they
[00:52:46] realize that the the node that says for
[00:52:49] women and for men that's under shoes was
[00:52:51] last updated in 2019 which means that
[00:52:54] it's just a dead node that's lying there
[00:52:55] and not being used. So they kind of know
[00:52:57] that okay we're supposed to be looking
[00:52:58] at a different node and stuff like that.
[00:53:00] And I'm not saying agents cannot
[00:53:02] understand this or models are not
[00:53:03] capable enough to understand this, but
[00:53:05] there are really weird rules within
[00:53:07] enterprises that are not documented
[00:53:09] anywhere and you want to um make sure
[00:53:12] that the agents have all of that context
[00:53:14] instead of just throwing the problem at
[00:53:16] them, right? Um yeah. Uh coming back to
[00:53:18] the versions we had, routing was one
[00:53:20] where you have really high control
[00:53:22] because even if your agent routes to the
[00:53:25] wrong department, humans can take
[00:53:27] control and you know undo uh those
[00:53:29] actions. Um and along the way you also
[00:53:32] figure out that you probably are dealing
[00:53:33] with a ton of data issues that you need
[00:53:35] to fix and you know um um u make sure
[00:53:38] that your data layer is good enough for
[00:53:39] the agent to function. uh we do is what
[00:53:42] we said of a co-pilot which is now that
[00:53:45] you've figured out routing works fine
[00:53:47] after a few iterations and you fixed all
[00:53:49] of your data issues, you could go to the
[00:53:51] next step which is can my agent provide
[00:53:54] suggestions uh based on some standard
[00:53:56] operating procedures that we have for
[00:53:58] the customer support agent, right? And
[00:54:00] it could just generate a draft that the
[00:54:02] human can make changes to. And when you
[00:54:05] do this, you're also logging human
[00:54:07] behavior, which means that how much of
[00:54:09] this draft was used by the customer
[00:54:11] support agent or what was omitted. So
[00:54:13] you're actually getting error analysis
[00:54:15] for free when you do this because you're
[00:54:17] literally logging everything that the
[00:54:18] user is doing that you could then build
[00:54:20] back into your flywheel. And then we say
[00:54:23] post that once you figured out that
[00:54:25] those drafts look good and most of the
[00:54:27] times maybe humans are not making too
[00:54:29] many changes. They're using these drafts
[00:54:30] as is. That's when you want to go to
[00:54:33] your end toend resolution assistant that
[00:54:35] could you know um draft a resolution
[00:54:38] that could sort the ticket as well right
[00:54:41] and those are the stages of agency where
[00:54:44] you start with low agency and then you
[00:54:45] go up high, right? Um, we also have this
[00:54:48] really nice table that we put together
[00:54:50] which is what do you do at each version
[00:54:54] and what you learn that can enable you
[00:54:56] to go to the next step and what
[00:54:58] information do you get that you can feed
[00:54:59] into the loop. Right? When you're just
[00:55:01] doing your routing, you have better
[00:55:03] quality routing data. You also know what
[00:55:06] kind of prompts you need to be building
[00:55:07] to improve the routing system.
[00:55:09] Essentially, you're figuring out your
[00:55:11] structure for context engineering and um
[00:55:14] building that flywheel that you want,
[00:55:15] right? And while I go through this, I
[00:55:18] want to also be very clear that two
[00:55:20] things. One is when you build with CCCD
[00:55:24] in mind, it doesn't mean that you fix
[00:55:26] the problem all for once. It's possible
[00:55:28] that you probably gone through V3 and
[00:55:30] you see a new distribution of data that
[00:55:31] you never previously imagined. But um
[00:55:34] this is just one way to lower your risk
[00:55:37] which is you get enough information
[00:55:39] about how users behave with your system
[00:55:42] before going to a point of complete um
[00:55:45] autonomy. And the second thing is um
[00:55:49] you're also kind of um building this um
[00:55:53] you know implicit logging system. Uh a
[00:55:56] lot of people come and tell us that oh
[00:55:57] wait there are eval right why do you
[00:55:59] need something like this? The issue with
[00:56:02] just building a bunch of evaluation
[00:56:04] metrics and then having um them in
[00:56:06] production is evaluation metrics catch
[00:56:09] only the errors that you're already
[00:56:10] aware already aware of. But there can be
[00:56:13] a lot of emerging patterns that you
[00:56:14] understand only after you put things in
[00:56:17] production. Right? So for those emerging
[00:56:18] patterns, you're kind of creating um um
[00:56:22] you know a low-risk uh kind of a
[00:56:24] framework so that you could understand
[00:56:26] user behavior and not really be in a
[00:56:28] position where there are tons of errors
[00:56:30] and you're trying to fix all of them at
[00:56:31] once. And this is not the only way to do
[00:56:34] it. There are tons of different ways.
[00:56:36] You want to decide how you constrain
[00:56:38] your autonomy. It could be based on the
[00:56:40] number of actions that the agent is
[00:56:42] taking, which is what we do in this
[00:56:44] example. It could be based on topic.
[00:56:45] there just some um domains where it's uh
[00:56:49] pretty high risk to make a system
[00:56:51] completely autonomous for um certain
[00:56:54] decisions but for some other topics it's
[00:56:55] okay to make them completely autonomous
[00:56:58] and depending on the complexity of the
[00:56:59] problem and that's where you really want
[00:57:01] your product managers your you know um
[00:57:04] engineers and subject matter experts to
[00:57:06] align on how to build the system and
[00:57:08] continuously improve it. The idea is
[00:57:11] just behavior calibration and not losing
[00:57:14] user trust as you do that behavior
[00:57:16] calibration. I guess
[00:57:17] >> we'll link folks to this actual post if
[00:57:18] they want to go really deep. You
[00:57:20] basically go through all of these steps
[00:57:21] by step a bunch of examples. And the
[00:57:24] idea here is as you said that like the
[00:57:26] reason everything about what you're
[00:57:27] describing here is about making it uh
[00:57:30] continuous and iterative and kind of
[00:57:32] moving along this progression of higher
[00:57:34] autonomy, less control. And this idea of
[00:57:37] even calling continuous calibration
[00:57:38] continuous development is communicating
[00:57:40] it's this kind of iterative process. And
[00:57:42] just to be clear, this this naming is
[00:57:44] kind of a owed to uh CI CICD, continuous
[00:57:49] integration, continuous deployment
[00:57:51] >> suite. And the idea here is like that
[00:57:53] this is the version of that for AI where
[00:57:55] instead of just like integrating into
[00:57:57] unit tests and deploying constantly,
[00:57:58] it's
[00:57:59] >> uh running evals, looking at results,
[00:58:01] iterating on on the metrics you're
[00:58:03] watching, figuring out where it's
[00:58:05] breaking, and iterating on that.
[00:58:07] Awesome. Okay, so again, we'll point
[00:58:09] people to this post if they want to go
[00:58:11] deeper. That was a great overview. Is
[00:58:12] there anything else before I go in a
[00:58:14] different topic around this framework
[00:58:16] specifically that you think is important
[00:58:17] for people to know?
[00:58:18] >> I think one of the most common questions
[00:58:20] we get is how do I know if I need to go
[00:58:23] to the next stage or if this is
[00:58:25] calibrated enough, right? There's not
[00:58:28] really a rule book you can follow, but
[00:58:29] it's all about minimizing surprise,
[00:58:32] which means let's say you're calibrating
[00:58:34] every one or two days. Um, and you
[00:58:36] figure out that you're not seeing new
[00:58:38] data distribution patterns. your users
[00:58:39] have been pretty consistent with how
[00:58:41] they're behaving with the system, then
[00:58:43] the amount of information you gain is
[00:58:46] kind of very low and that's when you
[00:58:47] know you can actually go to the next um
[00:58:50] stage, right? And it's all about the
[00:58:52] wipes at that point. Like do you know
[00:58:54] you're ready? Um you're not receiving
[00:58:56] any new information. But also it really
[00:59:00] helps to understand that sometimes there
[00:59:02] are events that could completely uh
[00:59:07] you know mess up the calibration of your
[00:59:08] system. An example is um GPD 40 doesn't
[00:59:12] exist anymore or it's going to be
[00:59:14] deprecated in APIs as well. So most
[00:59:16] companies that were using 40 should
[00:59:18] switch to five and five has very
[00:59:20] different properties. So that's where
[00:59:22] your calibration's off again. You want
[00:59:24] to go back and do this process again.
[00:59:26] Sometimes users start users start
[00:59:28] behaving with systems also differently
[00:59:30] over time or user behavior evolves even
[00:59:32] with consumer products right you don't
[00:59:34] talk to chat GPT the same way you were
[00:59:37] talking say two years ago just because
[00:59:39] you know the capabilities have increased
[00:59:40] so much and and also just people get
[00:59:43] excited when um you know these systems
[00:59:45] can solve one task they want to try it
[00:59:48] out on other tasks as well. Uh we built
[00:59:51] this system um for underwriters at some
[00:59:54] point, right? Underwriting is a painful
[00:59:56] task. There are agreements that are like
[00:59:58] you know uh you know loan uh
[01:00:01] applications that are like 30 or 40
[01:00:02] pages. And the idea for this bank was to
[01:00:05] build a system that could help
[01:00:07] underwriters pick policies and you know
[01:00:10] um um information about the bank so that
[01:00:12] they could approve loans, right? And for
[01:00:15] a good three or four months, everybody
[01:00:17] was pretty impressed with the system. We
[01:00:18] had underwriters actually report gains
[01:00:21] in terms of how much time they were
[01:00:22] spending etc. And post 3 months we
[01:00:25] realized that they were so excited with
[01:00:27] the product that they started asking
[01:00:28] very deep questions that we never
[01:00:30] anticipated. They would just throw the
[01:00:32] entire application document at the
[01:00:34] system and go like for a case that looks
[01:00:36] like this what did previous underwriters
[01:00:38] do and for a user that just seems like a
[01:00:42] natural extension of what they were
[01:00:43] doing but the building behind it should
[01:00:46] significantly change. Now you need to
[01:00:47] understand what does for a case like
[01:00:49] this mean in the context of the loan
[01:00:52] itself. Is it referring to people of a
[01:00:54] particular you know income range or is
[01:00:56] it referring to people in a particular
[01:00:57] geo and stuff like that and then you
[01:00:59] need to pick up historical documents
[01:01:01] analyze those documents and then tell
[01:01:02] them um okay this is what it looks like
[01:01:04] versus just saying that there's a policy
[01:01:06] X Y and Z and you want to um you know
[01:01:09] look up that policy. Um so something
[01:01:12] that might seem very natural to a end
[01:01:14] user might be very hard to build as a
[01:01:17] product builder and you see that user
[01:01:19] behavior also evolves over time and
[01:01:21] that's when you know you you know that
[01:01:22] you want to go back and recalibrate.
[01:01:24] >> What do you think is uh overhyped in the
[01:01:27] AI space right now and even more
[01:01:29] importantly what do you think is is
[01:01:31] underhyped?
[01:01:32] >> I am as I said like super optimistic in
[01:01:35] different things that are going in AI.
[01:01:37] So I wouldn't say overhyped but I feel
[01:01:39] kind of misunderstood is the concept of
[01:01:42] multi- aents. Uh people have this notion
[01:01:45] of like uh I have this incredibly
[01:01:47] complex problem. Now I'm going to break
[01:01:49] it down into hey you are this agent take
[01:01:52] care of this. You're this agent take
[01:01:53] care of this. And now if I somehow
[01:01:55] connect all of these agents they think
[01:01:57] they're the agent utopia. And it's never
[01:02:00] the case that there are incredibly
[01:02:02] successful multi-agent systems that are
[01:02:04] built right like there's no doubt about
[01:02:05] that. But I feel a lot of it comes in
[01:02:07] terms of how are you limiting the uh
[01:02:11] ways in which the system can go off
[01:02:13] tracks and for example like if you're
[01:02:15] building a supervisor agent and there
[01:02:17] are like sub agents that actually do the
[01:02:18] work for the super agent supervisor
[01:02:20] agent that is a very uh successful
[01:02:23] pattern but coming with this notion of
[01:02:25] I'm going to divide the responsibilities
[01:02:28] based on functionality and somehow uh
[01:02:31] expect all of that to work together in
[01:02:33] some sort of like gossip protocol.
[01:02:36] uh that is like extremely uh
[01:02:39] misunderstood that you could do that. I
[01:02:41] don't think like current uh ways of
[01:02:43] building and current like uh model
[01:02:44] capabilities are like right there in
[01:02:47] terms of like uh building those kind of
[01:02:49] applications. I feel that is kind of
[01:02:51] misunderstood than overrated. uh
[01:02:54] underrated. I feel it's hard to probably
[01:02:57] believe but I still feel coding agents
[01:02:58] are underrated in the sense that I feel
[01:03:01] like you can go on Twitter and you can
[01:03:02] go on Reddit and you see a lot of
[01:03:04] chatter about coding agents but talking
[01:03:07] to an engineer in like any random
[01:03:09] company uh especially outside of Bay
[01:03:11] Area you you can see like the amount of
[01:03:14] impact this coding agents can create and
[01:03:16] the penetration is very low. So I feel
[01:03:18] like 2025
[01:03:20] uh and 2026 is going to be like an
[01:03:22] incredible year for optimizing all of
[01:03:24] these processes and I feel that is going
[01:03:26] to be creating a lot of value with AI.
[01:03:28] That's really interesting on that first
[01:03:30] point. So the idea there is uh you'll
[01:03:32] probably be more successful building and
[01:03:34] using uh an agent that is able to do its
[01:03:37] own sub agent splitting of work versus
[01:03:40] like a bunch of say codeex agents where
[01:03:42] you do this task, you do that task. You
[01:03:45] can have agents to do these things and
[01:03:46] you as a human can orchestrate it or you
[01:03:48] can have like one uh larger agent that
[01:03:50] is going to orchestrate all of these
[01:03:51] things. But letting the agents
[01:03:53] communicate in terms of peer-to-peer
[01:03:55] kind of protocol and then especially uh
[01:03:58] doing this in say a customer support
[01:04:00] kind of use case is incredibly hard to
[01:04:02] control what kind of agent is replying
[01:04:04] to your customer because you need to
[01:04:06] shift your guardrails everywhere and
[01:04:07] things like that.
[01:04:08] >> Yeah. Okay. Uh great picks. Okay, Ash,
[01:04:11] what do you got?
[01:04:12] >> Can I say emails? Will I be cancelled?
[01:04:14] >> On which in which category? Which which
[01:04:16] bucket do they go?
[01:04:17] >> Overrated.
[01:04:18] >> Overrated. Okay, go go go for it. You we
[01:04:20] won't let you get cancelled.
[01:04:22] >> Uh just kidding. I think EVAs are
[01:04:24] misunderstood. They are important folks.
[01:04:25] I'm not saying they're not important.
[01:04:28] But I think just um this um I'm going to
[01:04:31] keep um jumping across tools and going
[01:04:34] to pick up and learn a new tool is
[01:04:36] overrated. I I still am old school and
[01:04:40] feel like you would need really need to
[01:04:42] be obsessed with the business problem
[01:04:43] you're trying to solve. AI is only a
[01:04:45] tool. Try to think of it that way. Of
[01:04:48] course, you need to be learning about
[01:04:49] the latest and greatest, but don't be so
[01:04:51] obsessed with just building so quickly.
[01:04:53] Building is really cheap today. Um
[01:04:55] design is more expensive. really
[01:04:57] thinking about your product, what you're
[01:04:58] going to build, is it going to really
[01:05:00] solve a pain point is is what is way
[01:05:03] more valuable today and it will only
[01:05:05] become uh more true in the near future,
[01:05:07] right? So really obsessing about your
[01:05:10] problem and design is underrated and
[01:05:12] just wrote building is overrated I
[01:05:15] guess.
[01:05:15] >> Awesome. Okay. Uh similar sort of
[01:05:18] question from a a product point of view.
[01:05:22] What do you think the next year of AI is
[01:05:24] going to look like? give us a vision of
[01:05:26] where you think things are going to go
[01:05:27] by say by the end of 2026.
[01:05:30] >> Yeah, I feel uh there's a lot of promise
[01:05:32] in terms of uh this background agents or
[01:05:35] proactive agents who is like they're
[01:05:38] going to like basically understand your
[01:05:40] workflow even more. Uh if you think if
[01:05:42] you think of like where is AI failing to
[01:05:45] create value today, it's mainly about
[01:05:47] not understanding the context. And the
[01:05:49] reason that it's not understanding the
[01:05:51] context is it's not plugged into the
[01:05:52] right places where actual work is
[01:05:54] happening. Right? And as you do more of
[01:05:56] this, you can give the agent mode of
[01:05:58] context and then it start to see the
[01:06:00] world around you and understand what is
[01:06:02] the what are the set of metrics that
[01:06:04] you're optimizing for or what are the
[01:06:06] kind of activities that you're trying to
[01:06:07] do. It is a very easy extension from
[01:06:10] there to actually gain more out of it
[01:06:12] and then let the agent prompt you back.
[01:06:14] uh we already do this in terms of charge
[01:06:16] GPT pulse which kind of gives you this
[01:06:18] daily update of things you might care
[01:06:20] about and it's it's very nice to
[01:06:22] actually have that like jog your brain
[01:06:24] up in terms of oh this is something that
[01:06:25] I haven't thought about maybe this is
[01:06:27] good and now when you extend this to
[01:06:28] more complex tasks like a coding agent
[01:06:31] which says that like okay I have fixed
[01:06:32] five of your linear tickets and here are
[01:06:34] the patches just review them at the
[01:06:36] start of your day so I feel that is
[01:06:38] going to be like extremely useful and I
[01:06:40] see that as like a strong direction in
[01:06:41] which like products are going to build
[01:06:42] in 2026
[01:06:44] That is so cool. So essentially agents
[01:06:45] kind of anticipating what you want to do
[01:06:48] and getting going getting ahead of you
[01:06:51] and here's I've solved these problems
[01:06:52] for you or I think this is going to
[01:06:54] crash your site. Maybe you should fix
[01:06:55] this thing right here or I see the spike
[01:06:57] here and let's refactor our database.
[01:07:00] Amazing. What a world. Okay, Ash, what
[01:07:03] do you got?
[01:07:04] >> I am all in for multimodal experiences
[01:07:06] in 2026. I think we have done quite some
[01:07:09] progress in 2025 and um not just in
[01:07:12] terms of generation but also
[01:07:14] understanding um until now I think LLMs
[01:07:17] have been our most commonly used models
[01:07:19] but as humans we are multimodal
[01:07:23] creatures I would say like um language
[01:07:25] is probably one of our last forms of
[01:07:26] evolution as the three of us are talking
[01:07:28] I think we're constantly getting so many
[01:07:30] signals I'm like oh Lenny is nodding his
[01:07:32] head so probably I would go in this
[01:07:34] direction or Lenny's bored so let me
[01:07:36] stop stop stop talking So there's a
[01:07:38] chain of thought be behind your chain of
[01:07:40] thought and you're constantly altering
[01:07:42] it with language that dimension of
[01:07:44] expression is not explored as well. So
[01:07:46] if you we could build better multimodal
[01:07:48] experiences that would get us closer to
[01:07:51] um humanlike um conversation richness
[01:07:55] and um yeah I think um and just you will
[01:07:59] also just given the kind of models
[01:08:01] there's a bunch of boring tasks as well
[01:08:03] which are ripe for AI if multimodal
[01:08:05] understanding gets better there are so
[01:08:07] many handwritten documents and really
[01:08:09] messy uh PDFs that cannot be passed even
[01:08:13] by the best of the models as of today
[01:08:15] and if It's possible. There's there'll
[01:08:17] be so much um um data that we can tap
[01:08:20] into.
[01:08:21] >> Awesome. I just saw Demis from Deep Mind
[01:08:23] AI, Google, whatever they call the whole
[01:08:25] or uh talking about this where he's
[01:08:27] thinks that's going to be a big part of
[01:08:28] where they're going, combining the image
[01:08:30] model work, the LLM, and also their
[01:08:34] world model stuff, Genie, I think is
[01:08:35] what it's called.
[01:08:36] >> So, that's going to be a wild wild time.
[01:08:39] Okay. Uh last question. If someone wants
[01:08:42] to just get better at building AI
[01:08:44] products, what's just maybe one skill or
[01:08:48] maybe two skills that you think they
[01:08:50] should lean into and develop?
[01:08:52] >> I think we did cover a bunch of best
[01:08:54] practices for AI products, which is
[01:08:56] start small, try to get your iteration
[01:08:59] going well and build a flywheel and all
[01:09:01] of that. But again, if you kind of look
[01:09:04] at it at a 10,000 ft level for anybody
[01:09:07] building today, like I was saying,
[01:09:09] implementation is going to be
[01:09:11] ridiculously cheap in the next few
[01:09:13] years. So really nail down your design,
[01:09:15] your judgment, your taste and all of
[01:09:17] that. Um and in general if you're
[01:09:20] building a career as well I feel for the
[01:09:23] past few years your your former years
[01:09:27] say the first two three years of uh
[01:09:29] building your career is always focused
[01:09:31] on execution mechanics and all of that
[01:09:33] and now we have AI that could help you
[01:09:36] ramp pretty quickly and post that I mean
[01:09:39] after a few years I think everybody
[01:09:41] everybody's job becomes about your taste
[01:09:43] your judgment and kind of um uh you know
[01:09:48] what is uniquely you. I think nail down
[01:09:50] on that part and try to figure out how
[01:09:53] you can bring in um that kind of a
[01:09:54] perspective. Um and it doesn't have to
[01:09:57] mean that you should be significantly
[01:09:59] older, have ex um years of experience.
[01:10:02] We recently hired someone and we use
[01:10:04] this very popular app uh for tracking
[01:10:07] our tasks, right? And we've been using
[01:10:09] it for years and we pay a high
[01:10:11] subscription fee for it. And this guy
[01:10:13] just came with his own white coded app
[01:10:15] to the meeting. he onboarded us um to
[01:10:18] all of it and he's like okay let's start
[01:10:19] using this and I think that kind of
[01:10:21] agency and that kind of ownership to
[01:10:23] really rethink experiences is what uh
[01:10:26] will set people apart and I'm not being
[01:10:28] blind to the fact that wipe coded apps
[01:10:30] have high maintenance costs and maybe as
[01:10:32] we scale as a company we have to replace
[01:10:34] it or we have to think of better
[01:10:36] approaches but given that we're a smalls
[01:10:38] size company now and just I I was really
[01:10:41] shocked because I never thought of it um
[01:10:44] um if you've been used to working in a
[01:10:46] certain way you associate a cost with
[01:10:48] building and I feel like folks who grew
[01:10:50] up in this age u have a much lower cost
[01:10:52] associated in their mind they just don't
[01:10:54] mind building something and going ahead
[01:10:56] with it and that's they're also very um
[01:10:59] enthusiastic to try out new tools um
[01:11:02] that's also probably why AI products
[01:11:03] have this retention problem because
[01:11:05] everybody's so excited about trying out
[01:11:06] these new tools and all of that but
[01:11:08] essentially um having the agency and
[01:11:11] ownership and I think it's also the end
[01:11:13] going to be the end of the busy work
[01:11:16] era, right? You can't be sitting in a
[01:11:18] corner doing something that doesn't move
[01:11:19] the needle for a company. You really
[01:11:21] need to be thinking about, you know, end
[01:11:23] to-end workflows, how you can bring in
[01:11:25] more impact. I think all of that will be
[01:11:27] super important.
[01:11:28] >> That reminds me, I just had Jason
[01:11:29] Lumpkit on the podcast. He's um uh very
[01:11:33] smart on sales, go to market, run
[01:11:34] Zaster, and he replaced his whole sales
[01:11:36] team with agents. He had 10 sales
[01:11:38] people, now he has 1.2 and 20 agents.
[01:11:41] And one of the agents, it was just
[01:11:43] tracking everyone's updates to
[01:11:45] Salesforce and kind of uh updating it
[01:11:48] automatically for them based on their
[01:11:49] calls. And one of the salespeople uh is
[01:11:52] like, "Okay, I'm I I quit." And it turns
[01:11:54] out he wasn't really doing anything.
[01:11:56] >> He was just sitting around
[01:11:58] >> and he's like, "Okay, this will catch
[01:11:59] me. I got to get out of here."
[01:12:01] >> Yes.
[01:12:01] >> So to your point about you can't it'll
[01:12:03] be harder to sit around and to your
[01:12:04] thumbs. Uh I think is really right.
[01:12:07] >> Yeah. I think to add on to that like
[01:12:09] feel like persistence is also something
[01:12:11] that is extremely valuable especially
[01:12:14] given that anybody who wants to build
[01:12:16] something is the information is like at
[01:12:18] your fingertips even more than like the
[01:12:20] past decade right you can learn anything
[01:12:23] overnight and become that sort of like
[01:12:25] iron man kind of approach so I feel like
[01:12:28] having that persistence and like going
[01:12:30] through the pain of like learning this
[01:12:33] implementing this and like understanding
[01:12:34] what works and what doesn't work and as
[01:12:36] you are going through this like pain of
[01:12:38] like developing multiple approaches and
[01:12:41] then solving the problem. I feel that is
[01:12:43] like going to be the real boat as an
[01:12:44] individual like I I I like to call it
[01:12:47] like pain is the new mode but uh I feel
[01:12:49] that is exactly super useful to actually
[01:12:52] have this in especially in like you know
[01:12:54] you're building these AI products.
[01:12:56] >> Say more about this. I love this
[01:12:57] concept. Pain is the new moat. Is there
[01:12:59] more there? Yeah, I feel as a company I
[01:13:02] mean like successful companies right now
[01:13:03] building in any new area they are
[01:13:05] successful not because they're first to
[01:13:07] the market or like they have this fancy
[01:13:09] feature that more customers are liking
[01:13:11] it. They went through the pain of
[01:13:12] understanding what are the set of
[01:13:14] non-negotiable things and trade them off
[01:13:18] exactly with like what are the features
[01:13:20] or like what are the model capabilities
[01:13:22] that I can use to solve that problem. it
[01:13:24] it this is not a straightforward
[01:13:26] process, right? There's no textbook to
[01:13:27] do this or like there's no
[01:13:28] straightforward way or like a known
[01:13:30] threaded path to be here. So a lot of
[01:13:33] this pain I was talking about is just
[01:13:35] like going through this iteration of
[01:13:37] like okay let's try this and if this
[01:13:39] doesn't work let's try this and that
[01:13:41] kind of knowledge that you built across
[01:13:42] the organization or across like your own
[01:13:45] experience lived experiences I feel that
[01:13:47] the that pain is what uh translates into
[01:13:50] the mode of the company right this could
[01:13:52] be like a product of eval or like
[01:13:55] something that you built and I feel that
[01:13:56] is going to be the game changer
[01:13:59] >> that is awesome it's like uh turning a
[01:14:01] coal into diamond Diamond. Yes. Okay. Uh
[01:14:05] I feel like we've done a great job
[01:14:07] helping people avoid some of the biggest
[01:14:11] issues people consistently run into
[01:14:13] building AI products. We've covered so
[01:14:15] many of the pitfalls and the ways to
[01:14:17] actually do it correctly.
[01:14:19] Before we get to our very exciting
[01:14:21] lightning round, is there anything else
[01:14:22] that you wanted to share? Anything else
[01:14:23] you want to leave listeners with?
[01:14:25] >> Be obsessed with your customers. Be
[01:14:26] obsessed with the problem. Um AI is just
[01:14:29] a tool and um try to make sure that
[01:14:32] you're really understanding your
[01:14:33] workflows. 80% of so-called AI
[01:14:36] engineers, AIPM spend their time
[01:14:38] actually understanding their workflows
[01:14:40] very well. They're not building the
[01:14:42] fanciest and the you know most uh cool
[01:14:45] models or um workflows around it.
[01:14:48] They're actually in the wheats
[01:14:49] understanding their customers behavior
[01:14:51] and data. Um, and whenever a software
[01:14:55] engineer who's never done AI before
[01:14:57] hears the term, look at your data, I
[01:14:59] think it's a huge revelation to them,
[01:15:01] but it's always been the case. You need
[01:15:03] to go there. Look at your data,
[01:15:04] understand your users, and that's going
[01:15:06] to be a huge differentiator.
[01:15:09] >> It's a great way to close it. It's not
[01:15:10] the AI isn't the answer. It's it's a
[01:15:13] tool to solve the problem. With that, we
[01:15:16] have reached our very exciting lightning
[01:15:18] round. I've got five questions for both
[01:15:20] of you. Are you ready? Yay. Yes.
[01:15:23] >> All right. So, you can both answer them.
[01:15:25] You can pick one which you want to
[01:15:26] answer. Either way, up to you. What are
[01:15:28] two or three books you find yourself
[01:15:30] recommending most to other people?
[01:15:32] >> For me, it's this book called When
[01:15:33] Breath Becomes Air, Lenny. It was
[01:15:35] written by Paul Kalaniti. I think he was
[01:15:38] um um an Indian origin neurosurgeon who
[01:15:40] was diagnosed with lung cancer at 31 or
[01:15:43] 32 and the whole book is his memoir and
[01:15:46] just is written after he was diagnosed
[01:15:48] and it's it's really beautiful
[01:15:51] especially because I read it during co
[01:15:53] and all we ever wanted to do during co
[01:15:55] is stay alive. Um there are a bunch of
[01:15:58] really nice quotes within the book as
[01:16:01] well, but I remember one of them he was
[01:16:03] kind of arguing against a very popular
[01:16:05] quote by Socrates which is the
[01:16:08] unexamined life is not worth living or
[01:16:12] something like that. And which means you
[01:16:14] really need to be thinking about your
[01:16:15] choices. You need to you know understand
[01:16:17] your values, your mission and all of
[01:16:19] that. And um Paul says, "If the
[01:16:21] unexamined life is not worth living, was
[01:16:24] the unlived life worth examining?" Which
[01:16:27] means are you spending so much time just
[01:16:29] understanding your mission and purpose
[01:16:31] that you've forgotten to live? And I
[01:16:33] think it everybody who's uh staying in
[01:16:36] the AI era and building and continuously
[01:16:38] going through this phase of reinventing
[01:16:40] themselves need to take a pause and live
[01:16:42] for a bit. I guess they need to stop
[01:16:44] evaling life too much. What really
[01:16:46] >> I was going to say that that's where my
[01:16:48] mind went. generate some emails for your
[01:16:50] life. Oh my god, we've gone too far.
[01:16:52] >> Yep. Yeah. Yeah. That's that's my
[01:16:54] favorite book.
[01:16:55] >> I I like more of science fiction books.
[01:16:57] So, I uh really like this three body
[01:17:00] problem series. Uh it's like a three
[01:17:02] book series. It's it's like has it has
[01:17:05] elements of like grander than science
[01:17:06] fiction uh life outside earth and how it
[01:17:10] impacts like human decision-m process
[01:17:12] and it also has like elements of
[01:17:14] geopolitics and how how much important
[01:17:17] or like valuable abstract science is to
[01:17:19] human progress and then that gets when
[01:17:22] that gets stopped it's it's not
[01:17:23] noticeable in everyday life but it it
[01:17:25] can cause like devastating effects. So I
[01:17:27] feel like AI helping in these areas for
[01:17:30] example is going to be like extremely
[01:17:31] crucial and that book is like a nice
[01:17:33] example of what could happen otherwise.
[01:17:35] Completely agree absolutely love might
[01:17:37] be my favorite sci-fi book except or
[01:17:39] series even and it's three I have to
[01:17:41] read them all three by the way. I find
[01:17:42] that it only got really good about one
[01:17:44] and a half books in. So if anyone's
[01:17:46] tried it and like what the heck is going
[01:17:47] on here just keep reading and get to the
[01:17:49] middle of the second one and then gets
[01:17:51] mindblowing.
[01:17:52] >> Yes. Uh, if you love sci-fi and you're
[01:17:55] an AI, you got to read this book called
[01:17:57] A Fire Upon the Deep
[01:17:59] by uh, Vernon Vege.
[01:18:03] >> Mhm.
[01:18:04] >> Check it out. It's incredible. Uh, I saw
[01:18:07] Noah Smith on his newsletter recommend
[01:18:08] this book and there's like a whole
[01:18:10] there's like sequels to it, but this is
[01:18:11] the one. It's so incredible and it's
[01:18:14] actually turns out it's about AGI and
[01:18:15] super intelligence and all these things
[01:18:17] and it's just like so epic and no one's
[01:18:19] heard of it.
[01:18:19] >> Thank you.
[01:18:20] >> There you go. I'm giving you one back.
[01:18:21] Okay, next question. What's a favorite
[01:18:23] recent movie or TV show that you've
[01:18:25] really enjoyed?
[01:18:26] >> I started re-watching Silicon Valley,
[01:18:28] and I think it's so true. It's so
[01:18:30] timeless. Everything is repeating all
[01:18:32] over again. Anybody who's watched it a
[01:18:34] few years ago should start re-watching
[01:18:36] it, and you'll see that it's eerily
[01:18:37] similar to everything that's happening
[01:18:39] right now with the AI wave.
[01:18:41] >> That's That's a good idea to rewatch it.
[01:18:43] I love that their whole business was
[01:18:44] like an algorithm to compress, like a
[01:18:46] compression algorithm. It's like maybe a
[01:18:47] precursor to LM in some small way. Very
[01:18:50] good. All right, GT, what you got?
[01:18:53] >> Uh, I'm going to digress and say not a
[01:18:55] movie or a TV show, but there's this
[01:18:57] game I picked up recently called
[01:18:59] Expedition 33. Uh, it has nothing to do
[01:19:01] with AI, but it's an incredibly
[01:19:03] incredibly well-made game in terms of
[01:19:05] the game play or like the movie and the
[01:19:07] story and the music. Uh, it it's been
[01:19:09] amazing.
[01:19:10] >> I love that you have time to play games.
[01:19:11] That's a great sign. I love that. So, an
[01:19:13] open eye. I'm just imagining you're
[01:19:15] there's nothing else going on except
[01:19:17] just coding and and
[01:19:19] >> yeah, it has been incredibly hard to
[01:19:21] find time for that.
[01:19:22] >> That's good. That's a good sign. I'm
[01:19:24] happy to hear this. Okay. What's a
[01:19:25] favorite product that you've recently
[01:19:26] discovered that you really love?
[01:19:28] >> For me, it's Whisper Flow. I think I've
[01:19:29] been using it quite a bit and I didn't
[01:19:32] know I needed it so much. Um the best
[01:19:35] part is it's a conceptual transcription
[01:19:38] tool which means if you go to you know
[01:19:41] codeex and start using whisfl it starts
[01:19:43] identifying variables and all of that
[01:19:45] and it's so seamless in terms of
[01:19:47] transcription to instruction you could
[01:19:49] say something like I'm so excited today
[01:19:51] add three exclamation marks and it
[01:19:53] seamlessly switches it adds those three
[01:19:55] exclamation marks instead of you know
[01:19:57] writing add three exclamation marks and
[01:19:59] I think it's pretty cool um um if you're
[01:20:01] not using it you should try it I'll do a
[01:20:04] plug. Get Whisper Flow for free for an
[01:20:06] entire year
[01:20:08] >> for a year for free by becoming an
[01:20:10] annual subscriber of my newsletter.
[01:20:12] >> And that's how I got access to it.
[01:20:14] Lenny,
[01:20:14] >> there we go. It's like I think I I
[01:20:17] pitched this deal. I think people don't
[01:20:18] truly understand how incredible this is.
[01:20:20] They're like, "No way. This is real."
[01:20:22] It's real. And 18 other products.
[01:20:23] Lenny's productbass.com. Check it out.
[01:20:26] Moving on. K.
[01:20:28] >> Awesome. Uh I actually am a stickler for
[01:20:31] productivity. I keep experimenting new
[01:20:33] CLI tools and like things which can uh
[01:20:36] make me faster. Uh so I feel like a
[01:20:38] recast has been amazing. Uh I've
[01:20:40] discovered all this like new shortcuts
[01:20:42] that you can use to open different
[01:20:43] things, type in shortcut commands and
[01:20:45] things like that. And caffeinate is
[01:20:47] another thing that I've recently
[01:20:48] discovered from my teammates. It helps
[01:20:51] you like prevent Mac from sleeping. So
[01:20:53] you can run this really long codeex task
[01:20:55] for like four or five hours locally. Let
[01:20:57] it build the thing and then you can wake
[01:20:59] up and be like okay this is good. I like
[01:21:01] this.
[01:21:02] >> That's hilarious. That combo codeex and
[01:21:04] caffeinate. You guys, you guys need to
[01:21:07] use it. Like build that yourself. An
[01:21:08] open air version of that or the codeex
[01:21:10] agent should just keep your Mac from
[01:21:12] sleeping. That's so funny. Uh, by the
[01:21:13] way, Raycast also part of Lenny's
[01:21:15] product pass. One year free of Raycast.
[01:21:18] >> We wen
[01:21:20] Lenny didn't tell us these folks. These
[01:21:23] are actually our favorite.
[01:21:24] >> These are just two of 19 products. No
[01:21:26] caffeinate though. I don't know if
[01:21:27] that's even paid. Okay, let's keep
[01:21:29] going. Do you have a favorite life motto
[01:21:32] that you find yourself coming back to in
[01:21:34] work or in life?
[01:21:35] >> For me, I think this is what my dad told
[01:21:37] me when I was a kid and it's always
[01:21:39] stuck, which is um um they told it
[01:21:42] couldn't be done, but the fool didn't
[01:21:44] know it, so he did it anyway. I think be
[01:21:46] foolish enough to believe that you can
[01:21:49] do anything if you put your heart to it.
[01:21:51] Especially now because you have so much
[01:21:54] data at your hand that could be pointing
[01:21:56] towards the fact that you probably will
[01:21:58] be unsuccessful. with how many podcasts
[01:22:00] made it to more than a thousand
[01:22:01] subscribers or how many companies hit
[01:22:04] more than 1 million y and there's always
[01:22:07] data to show you that you won't be
[01:22:08] successful but sometimes just be foolish
[01:22:10] and go ahead with it
[01:22:12] >> that's great yeah for me I uh am more of
[01:22:15] an overinker so I really like this quote
[01:22:18] from Steve Jobs that you can only
[01:22:20] connect the dots looking backwards so
[01:22:22] it's a lot of the times there are like
[01:22:24] numerous choices and you don't really
[01:22:26] know the optimal one to pick but life's
[01:22:28] life works in ways that you can actually
[01:22:30] see back and be like, "Oh, these are
[01:22:31] actually beautiful in terms of how I I
[01:22:34] would transition." So, I feel like that
[01:22:35] is extremely useful in like, you know,
[01:22:37] keep moving forward, keep experimenting.
[01:22:39] >> Final question. Whenever I have two
[01:22:41] guests on the podcast at once, I like to
[01:22:43] ask this question. What's something that
[01:22:46] you admire about the other person?
[01:22:48] >> I think with Kir, um, it's about he's
[01:22:53] he's pretty calm and, uh, very grounded.
[01:22:56] Um, and he's always been my sounding
[01:22:58] board. I can throw a ton of ideas at him
[01:23:00] and he always comes up with he's able to
[01:23:03] anticipate the kind of issues that might
[01:23:06] um, run into and he's extremely um, kind
[01:23:10] and lets his work speak instead of
[01:23:13] actually doing a lot of talking, I
[01:23:14] guess. But if I had to pick one, I think
[01:23:17] uh, he's the most incredible husband. So
[01:23:20] >> reveal little people know.
[01:23:24] >> Yeah. We've been married for four years
[01:23:27] and been the most beautiful four years
[01:23:29] of my life.
[01:23:30] >> Oh wow. Okay. How do you follow that?
[01:23:34] >> Yeah, it's super hard to follow that. I
[01:23:36] would say I am extremely privileged in
[01:23:39] terms of working with like really smart
[01:23:41] people in great companies in the Silicon
[01:23:43] Valley. And I feel the unique thing that
[01:23:46] stands with Ashwaryia across like any
[01:23:49] other uh smart folks I've worked on is
[01:23:51] like she has this really amazing knack
[01:23:53] of teaching and like explaining
[01:23:55] something uh in a very understandable
[01:23:57] and easy to comprehend way and that
[01:24:00] combined with persistence is like super
[01:24:02] useful especially in this uh fastmoving
[01:24:05] AI world that we are in in the sense
[01:24:06] that there's so many new things coming
[01:24:08] up it feels overwhelming but when I hear
[01:24:10] her talk about like this is how you make
[01:24:12] sense of this entire thing this is where
[01:24:14] it plugs in. I feel like oh that is so
[01:24:16] simple like I can also do that. So she
[01:24:18] empowers a lot of people by simplifying
[01:24:20] things and you know like uh explaining
[01:24:23] things in the most understandable way.
[01:24:25] So I feel that is like an incredible
[01:24:26] quality.
[01:24:28] >> Amazing. How sweet. I got to do this all
[01:24:30] the time. I need more more yes to that
[01:24:32] was that was great. Okay. Uh final
[01:24:34] questions. Where can folks find stuff
[01:24:36] that you're working on? Find you online.
[01:24:37] Talk about share your course link and
[01:24:39] then just how can listeners be useful to
[01:24:41] you?
[01:24:41] >> I write a lot on LinkedIn. Um um so if
[01:24:45] you if you want to listen to pragmatists
[01:24:47] who've been in the weeds working on AI
[01:24:49] products and um what they're seeing, you
[01:24:52] can uh follow my work. We also have a
[01:24:54] GitHub repository with about 20K stars
[01:24:56] and that repository is all about good
[01:24:59] resources for learning AI. It's
[01:25:00] completely free and if you um like what
[01:25:03] we spoke today, we also run a super
[01:25:05] popular course. We'll leave a link to it
[01:25:07] on building enterprise AI products. And
[01:25:09] the course is a lot about unlearning
[01:25:11] mindsets and following like a problem
[01:25:14] first approach uh instead of a tool
[01:25:16] first or a hype first approach. Um so
[01:25:19] you can check that out as well. And if
[01:25:20] you don't want to do the course, we
[01:25:22] write a lot. We give out a lot of free
[01:25:24] resources. We have free sessions. So
[01:25:26] make sure you follow our work.
[01:25:27] >> Yeah, I would also add that I you can
[01:25:29] also find me on LinkedIn. uh I don't
[01:25:31] like write a lot I guess but I'm super
[01:25:34] all excited to just talk to any complex
[01:25:36] product that you're building and if you
[01:25:38] have thoughts on like how you can uh use
[01:25:41] coding agents to make your life better
[01:25:43] or how what are the problems that you're
[01:25:44] seeing um always my DMs are open and
[01:25:46] like we can have a great discuss.
[01:25:47] >> Awesome. Well, Kiriti and Ash, thank you
[01:25:50] so much for being here.
[01:25:52] >> Thank you so much.
[01:25:53] >> Thank you Lenny. This was so much fun.
[01:25:54] >> So much fun. Bye everyone.
[01:25:58] >> Thank you so much for listening. If you
[01:25:59] found this valuable, you can subscribe
[01:26:01] to the show on Apple Podcasts, Spotify,
[01:26:03] or your favorite podcast app. Also,
[01:26:06] please consider giving us a rating or
[01:26:08] leaving a review as that really helps
[01:26:09] other listeners find the podcast. You
[01:26:12] can find all past episodes or learn more
[01:26:14] about the show at lennispodcast.com.
[01:26:17] See you in the next episode.

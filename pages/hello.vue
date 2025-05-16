<template>
    <!-- NAV -->
    <HeaderNav />
    <div class="font-inter antialiased">
  
      <!-- HERO -->
      <section class="bg-primary-50 py-20">
        <div v-motion-fade-in-up style="width: 90%; margin: 0 auto" class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 space-y-6">
            <h4 class="font-poppins font-semibold uppercase text-[#30104C] text-xl">
              Launch Creator‑Led Campaigns
            </h4>
            <h1 class="font-poppins font-bold text-5xl leading-tight text-[#30104C]">
              Turn Your Mission into a Movement
            </h1>
            <p class="font-inter text-lg text-[#343538]">
              Partner with purpose-driven creators to amplify your message, engage new audiences, and drive measurable social impact--all from one intuitive platform.
            </p>
            <div class="justify-center lg:justify-start flex items-center mt-[32px]">
          <button
          class="text-base px-3 py-2 rounded-lg bg-secondary text-white hover-button-blue sm:text-xl sm:py-1.5 sm:px-3"
          @click="navigateTo('/book-a-demo/')"
        >
          Book a Demo
        </button>
        <NuxtLink to='/social-currant-university'>
          <div
            class="text-base px-3 py-2 rounded-lg border-2 border-primary text-primary mx-2 cursor-pointer hover:bg-primary hover:text-white sm:text-xl sm:py-1.5 sm:px-3"
          >
            Creator Accelerator Program
          </div>
        </NuxtLink>
        </div>
          </div>
          <div class="lg:w-1/2">
            <img
              src="/assets/images/socialcurrantheroimageweb.png"
              alt="Hero placeholder"
            />
          </div>
        </div>
        <OrganizationCarousel />
      </section>
      <img
      class="background-gradient"
      src="~/assets/images/backgroundgradientcircle.svg"
    >
      <!-- Center TExt -->
      <section id="narrative-bridge" class="py-20 bg-white">
    <div class="container mx-auto px-6 space-y-12">
      <!-- Enhanced Headline -->
      <h2
        class="text-[48px] font-bold text-center leading-tight filter drop-shadow-md"
      >
        We help
        <span class="text-secondary">nonprofits</span>
        and
        <span class="text-secondary">impact-driven organizations</span>
        build relationships with
        <span
          class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          passionate
          <span class="text-secondary">content creators</span>
        </span>
        to create
        <span
          class="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
        >
          <span class="text-secondary">narrative change</span>
        </span>
        around
        <span class="underline text-secondary decoration-primary decoration-2">
          causes they care about
        </span>
      </h2>
    </div>
  </section>
    <!-- Creative 8-tile Collage -->
    <!-- <section
    id="impact-collage"
    class="relative w-full py-16 mt-[80px]"
  > -->
    <!-- decorative blobs -->
    <!-- <div
      class="absolute -top-20 -right-20 w-[500px] h-[500px]
      bg-gradient-to-tr from-[#2565F4] to-[#30104C] rounded-full"
    ></div>
    <div
      class="absolute -bottom-16 -left-16 w-[600px] h-[600px]
             bg-gradient-to-tr bg-[#2565F4]
             rounded-full"
    ></div>

    <div class="relative container mx-auto px-6">
      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8
               auto-rows-[100px] sm:auto-rows-[150px] md:auto-rows-[200px]
               gap-2"
      >
        <div
          v-for="(img, i) in impactHighlightImages"
          :key="i"
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }"
          :class="img.span"
        >
          <div class="relative w-full h-full overflow-hidden rounded-xl">
            <img
              :src="img.src"
              alt=""
              class="w-full h-full object-cover rounded-xl shadow-lg
                     transition-transform duration-300 ease-out
                     hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
            /> -->
            <!-- subtle color overlay -->
            <!-- <div class="absolute inset-0 bg-primary/15 mix-blend-color-burn rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
        <!-- About -->
        <!-- <section class="py-16 bg-white" id="about">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 items-center"> -->
    <!-- Image -->
    <!-- <div class="flex justify-center md:justify-end">
      <img
        src="~/assets/images/currantheroimage.png"
        alt="About Social Currant"
        class="w-full max-w-md rounded-lg shadow-lg"
      />
    </div> -->
    <!-- Text -->
    <!-- <div class="space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold text-primary">Building Lasting Partnerships for Social Impact</h2>
      <p class="text-gray-700 text-lg">
        Social Currant bridges nonprofits and impact-driven startups with passionate content creators. Our intuitive platform guides you through campaign setup, creator matchmaking, and content management—so you can focus on what matters: making a real-world difference and partnering with content creators to get there.
      </p>
      <NuxtLink
        to="/about-us"
        class="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-lg"
      >
        Learn More
      </NuxtLink>
    </div>
  </div>
</section> -->
<!-- <section
    id="media-insights"
    class="py-20 bg-gradient-to-br from-primary/10 to-secondary/10"
  >
    <div class="container mx-auto px-6 space-y-12"> -->
      <!-- Headline -->
      <!-- <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-center">
        The old media model is breaking—creators are where audiences live now
      </h2> -->

      <!-- Unified grid of insights -->
      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <InsightCard
          v-for="(item,i) in insights"
          :key="i"
          :item="item"
          :delay="i * 100"
        />
      </div>
    </div>
  </section> -->
  <!-- The Problem -->
  <!-- <section id="the-problem" class="py-24 mt-[80px] bg-white bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
    <div class="container mx-auto px-6 flex flex-col items-center space-y-12"> -->
      <!-- Headline -->
      <!-- <h2 class="text-3xl md:text-4xl font-bold text-primary text-center">
        Traditional media is fragmenting—viewership and trust in TV &amp; news outlets have plunged.
      </h2> -->

      <!-- Icons Row -->
      <!-- <div class="grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div
          v-motion-fade-in-up.visible-once
          class="flex flex-col items-center text-center space-y-3"
        >
          <DeviceTvIcon class="w-12 h-12 text-secondary" />
          <h3 class="text-xl font-semibold text-gray-800">Declining TV Reach</h3>
          <p class="text-gray-600 text-sm">
            Under‑49s tuning into cable or broadcast TV has dropped below 40%.
          </p>
        </div>

        <div
          v-motion-fade-in-up.visible-once
          :style="{ transitionDelay: '100ms' }"
          class="flex flex-col items-center text-center space-y-3"
        >
          <UserGroupIcon class="w-12 h-12 text-secondary" />
          <h3 class="text-xl font-semibold text-gray-800">Falling Trust</h3>
          <p class="text-gray-600 text-sm">
            Over half of Americans report decreasing trust in traditional news media.
          </p>
        </div>

        <div
          v-motion-fade-in-up.visible-once
          :style="{ transitionDelay: '200ms' }"
          class="flex flex-col items-center text-center space-y-3"
        >
          <ChatBubbleOvalLeftIcon class="w-12 h-12 text-secondary" />
          <h3 class="text-xl font-semibold text-gray-800">Passive News</h3>
          <p class="text-gray-600 text-sm">
            Younger generations don’t seek out news—they encounter it while scrolling.
          </p>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Why Creators -->
  <section id="why-creators" class="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <!-- Column 1: Heading + Intro -->
      <div class="space-y-6">
        <h2 class="text-4xl md:text-4xl font-bold text-primary">
          The old media model is breaking—creators are where audiences live now
        </h2>
        <p class="text-lg text-gray-700 max-w-lg">
          While traditional outlets lose grip, creators on TikTok, Instagram &amp; YouTube capture attention—and drive engagement that legacy media simply can’t match.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(s,i) in stats"
          :key="s.label"
          v-motion-fade-in-up.visible-once
          :style="{ transitionDelay: `${i * 100}ms` }"
          class="bg-secondary/10 p-6 rounded-lg flex flex-col items-center text-center space-y-2"
        >
          <div class="text-4xl font-bold text-primary">{{ s.number }}</div>
          <div class="text-gray-700">{{ s.label }}</div>
        </div>
      </div>
      </div>

      <!-- Column 2: Stat Cards -->
<div class="relative container mx-auto px-6 overflow-hidden">
  <div
    class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8
           auto-rows-[100px] sm:auto-rows-[150px] md:auto-rows-[200px]
           gap-2"
  >
    <div
      v-for="(img, i) in impactHighlightImages"
      :key="i"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }"
      :class="img.span"
    >
      <div class="relative w-full h-full overflow-hidden rounded-xl">
        <img
          :src="img.src"
          alt=""
          class="w-full h-full object-cover rounded-xl shadow-lg
                 transition-transform duration-300 ease-out
                 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
        />
        <!-- subtle color overlay -->
        <div class="absolute inset-0 bg-primary/15 mix-blend-color-burn rounded-xl"></div>
      </div>
    </div>
  </div>
</div>
    </div>
  </section>
        <!-- METRICS -->
        <section class="py-20">
  <div class="container mx-auto px-6 text-center space-y-8">
    <h2 class="text-4xl font-bold text-primary">Our Reach & Impact</h2>
    <p class="text-gray-600 max-w-2xl mx-auto">
      By partnering with over 4,800 creators, we have driven meaningful engagement for causes on TikTok, Instagram & YouTube.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Views -->
      <div
        v-motion-fade-in-up
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
        style="transition-delay: 0ms"
      >
        <EyeIcon class="w-10 h-10 text-secondary" />
        <div class="text-5xl font-extrabold text-primary">350M</div>
        <div class="uppercase tracking-wide text-gray-500">Views</div>
      </div>

      <!-- Engagements -->
      <div
        v-motion-fade-in-up
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
        style="transition-delay: 100ms"
      >
        <HeartIcon class="w-10 h-10 text-secondary" />
        <div class="text-5xl font-extrabold text-primary">30.6M</div>
        <div class="uppercase tracking-wide text-gray-500">Engagements</div>
      </div>

      <!-- Avg Engagement -->
      <div
        v-motion-fade-in-up
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
        style="transition-delay: 200ms"
      >
        <ChartBarIcon class="w-10 h-10 text-secondary" />
        <div class="text-5xl font-extrabold text-primary">8.6%</div>
        <div class="uppercase tracking-wide text-gray-500">Avg Engagement</div>
      </div>

      <!-- Content Pieces -->
      <div
        v-motion-fade-in-up
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
        style="transition-delay: 300ms"
      >
        <DocumentTextIcon class="w-10 h-10 text-secondary" />
        <div class="text-5xl font-extrabold text-primary">4000+</div>
        <div class="uppercase tracking-wide text-gray-500">Content Pieces</div>
      </div>
    </div>
  </div>
</section>
<!-- Get Started CTA -->
<!-- <section
  id="get-started"
  class="py-20 bg-gradient-to-tr from-[#4780FF] to-[#A2BBF7]"
>
  <div
    v-motion-fade-in-up.visible-once
    class="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0"
  > -->
    <!-- Headline -->
    <!-- <h2 class="text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
      Ready to turn your mission into a movement?
    </h2> -->

    <!-- Actions -->
    <!-- <div class="flex flex-col sm:flex-row gap-4">
      <NuxtLink
        to="/book-a-demo"
        class="border-2 border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition"
      >
        Book a Demo
      </NuxtLink>
    </div>
  </div>
</section> -->
  <!-- Relationships -->
  <section id="relationships" class="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column: Title & Intro -->
        <div class="container mx-auto px-6 space-y-8">
    <!-- Title -->
    <h2 class="text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left">
      A Roster of Creators Aligned With Your Values to Build Relationships and Execute Work That Drives Results
    </h2>

    <!-- Description -->
    <p class="text-gray-700 text-lg text-center lg:text-left max-w-2xl">
      Our roster of Creators are vetted and approved so you can focus on nurturing creator partnerships over time to amplify your narrative and drive sustainable impact.
    </p>

    <!-- Image Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(img, i) in ourCreators"
        :key="i"
        v-motion-fade-in-up.visible-once
        :style="{ transitionDelay: `${i * 100}ms` }"
        class="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <img
          :src="img.src"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-primary/15 mix-blend-color-burn rounded-xl"></div>
      </div>
    </div>
  </div>

        <!-- Right Column: Tactics Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div
            v-for="(item, i) in relationships"
            :key="item.id"
            v-motion-fade-in-up.visible-once
            :style="{ transitionDelay: `${i * 100}ms` }"
            class="flex items-start space-x-4"
          >
            <div :class="item.bgClass + ' p-3 rounded-full shrink-0'">
              <component :is="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-primary">{{ item.title }}</h3>
              <p class="text-gray-700 mt-1">{{ item.description }}</p>
              <p class="text-gray-700 mt-1 font-semibold">Best for: {{ item.bestFor }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="expertise" class="py-20 bg-white">
    <!-- Header -->
    <div class="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left">
        From Strategy to Results, We’ve Got You Covered
      </h2>
      <NuxtLink
        to="/contact"
        class="mt-6 lg:mt-0 inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Schedule a Demo
        <ArrowRightIcon class="w-4 h-4 ml-2" />
      </NuxtLink>
    </div>

    <!-- Cards -->
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(card, i) in expertiseCards"
        :key="card.id"
        v-motion-fade-in-up.visible-once
        class="bg-white rounded-lg shadow-lg overflow-hidden"
        :style="{ transitionDelay: `${i * 100}ms` }"
      >
        <!-- Top Content -->
        <div class="px-6 py-4 border-b">
          <span class="inline-block text-xs uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {{ card.pill }}
          </span>
          <h3 class="mt-3 text-xl font-bold text-gray-900">{{ card.title }}</h3>
          <p class="mt-2 text-gray-700">{{ card.description }}</p>
        </div>

        <!-- Illustration Placeholder -->
        <div class="p-8 bg-gray-100 flex items-center justify-center">
          <img
            v-if="card.image"
            :src="card.image"
            alt=""
            class="h-full object-cover"
          />
          <span v-else class="text-gray-400">{{ card.imagePlaceholder }}</span>
        </div>
      </div>
    </div>
  </section>
<!-- Core Features Explorer (Tabs) -->
<section
    id="core-features"
    class="py-20 bg-gradient-to-r from-primary/10 to-secondary/10"
  >
    <div class="container mx-auto px-6 flex flex-col items-center space-y-8">
      <!-- Section Title -->
      <h2 class="text-3xl lg:text-4xl font-bold text-primary text-center">
        Our All in One Platform Gives You the Tools
      </h2>

      <!-- Tabs -->
<!-- Tabs -->
<div class="flex flex-wrap justify-center gap-4">
  <button
    v-for="tab in tabs"
    :key="tab.id"
    @click="activeTab = tab.id"
    :class="[
      'flex items-center gap-2 px-5 py-2 border-2 rounded-full font-medium transition group',
      activeTab === tab.id
        ? 'bg-primary text-white border-primary'
        : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
    ]"
  >
    <component
      :is="tab.icon"
      :class="[
        'w-5 h-5 transition-colors',
        activeTab === tab.id
          ? 'text-white'
          : 'text-primary group-hover:text-white'
      ]"
    />
    <span>{{ tab.label }}</span>
  </button>
</div>

      <!-- Main Image -->
      <div
        class="w-4/5 md:w-2/3 mx-auto"
      >
        <img
          :src="currentImage"
          :alt="`Illustration of ${activeTabLabel}`"
          class="w-full rounded-xl shadow-2xl"
        />
      </div>

      <!-- Description -->
      <p
        class="max-w-2xl text-center text-primary text-[22px] px-4"
      >
        {{ activeTabDescription }}
      </p>
    </div>
  </section>
<!-- <WaysToApply /> -->
<!-- Narrative Change Timeline -->
<!-- <section id="narrative-change" class="py-20 bg-secondary-50">
  <div class="container mx-auto px-6 text-center mb-12">
    <h2 class="text-3xl lg:text-4xl font-bold text-primary">Building Narrative Change Over Time</h2>
    <p class="text-gray-600 max-w-2xl mx-auto mt-4">
      We help you meet audiences where they are—layering creator voices into a long‑term story that grows empathy and action.
    </p>
  </div>

  <div class="container mx-auto px-6 relative">
    <div class="hidden lg:block absolute left-1/2 transform -translate-x-1 bg-primary w-1 top-0 bottom-0"></div>

    <div class="space-y-12">
      <template v-for="(step,i) in timeline" :key="i">
        <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div
            :class="{
              'lg:col-start-1 lg:text-right': i % 2 === 0,
              'lg:col-start-2 lg:text-left': i % 2 !== 0
            }"
            v-motion-fade-in-step
            class="bg-white rounded-lg shadow-lg p-6 lg:w-3/4"
          >
            <div class="flex items-center space-x-4 mb-4 lg:justify-end">
              <img :src="step.icon" alt="" class="w-8 h-8" />
              <h3 class="text-xl font-semibold text-primary">{{ step.title }}</h3>
            </div>
            <p class="text-gray-700">{{ step.text }}</p>
          </div>
          <div class="absolute lg:relative left-1/2 transform -translate-x-1/2 bg-white border-4 border-primary w-6 h-6 rounded-full top-6 lg:top-auto"></div>
        </div>
      </template>
    </div>
  </div>
</section> -->
<!-- Testimonials -->
<section id="testimonials" class="py-20 py-20">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-24 text-primary">What Organizations Are Saying</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(t,i) in testimonials"
        :key="i"
        v-motion-fade-in-step
        class="relative bg-white rounded-lg border border-purple p-6 pt-16 shadow-lg"
      >
        <!-- Avatar -->
        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            :src="t.image"
            alt="Photo of {{ t.name }}"
            class="w-24 h-24 rounded-full border-4 border-purple"
          />
        </div>
        <!-- Quote -->
        <p class="text-gray-700 text-center mb-6 leading-relaxed">
          “{{ t.quote }}”
        </p>
        <!-- Name & Role -->
        <h4 class="text-center font-semibold text-primary">{{ t.name }}</h4>
        <p class="text-center text-gray-500">{{ t.role }}</p>
      </div>
    </div>
  </div>
</section>
  <!-- FAQs -->
  <section id="faqs" class="py-20 bg-gray-50">
    <!-- Heading -->
    <div class="container mx-auto px-6 text-center mb-12">
      <h2 class="text-3xl font-bold text-primary">FAQs</h2>
    </div>

    <!-- Q/A blocks -->
    <div class="container mx-auto px-6 space-y-6">
      <div
        v-for="(faq, i) in faqs"
        :key="i"
        v-motion-fade-in-up.visible-once
        :style="{ transitionDelay: `${i * 100}ms` }"
        class="p-6 bg-white border border-gray-200 rounded-lg"
      >
        <h3 class="text-lg font-semibold text-primary mb-2">
          {{ faq.question }}
        </h3>
        <p class="text-gray-700">
          {{ faq.answer }}
        </p>
      </div>

      <!-- View all button -->
      <div class="text-center mt-8">
        <NuxtLink
          to="/frequently-asked-questions"
          class="inline-block border-2 border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition"
        >
          View All FAQs
        </NuxtLink>
      </div>
    </div>
  </section>
      <!-- FOOTER -->
      <Footer />
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import MetricCard from '@/components/MetricCard.vue'
import { useMotion } from '@vueuse/motion'
import { ArrowRightIcon, ChatBubbleOvalLeftIcon, PresentationChartBarIcon, HomeIcon, BuildingOffice2Icon, GiftIcon, EyeIcon, UserGroupIcon, DocumentTextIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, CurrencyDollarIcon, DocumentCheckIcon, ChartBarIcon, HeartIcon, ChatBubbleOvalLeftIcon as ChatIcon, ArrowUpOnSquareIcon as ShareIcon } from '@heroicons/vue/24/outline'

const impactHighlightImages = [
  // large square
  // { src: '/assets/images/creators/creatorindc.png',      span: 'col-span-2 row-span-2' },
  // medium rectangle
  { src: '/assets/images/creators/andrewgovwalz.png',           span: 'col-span-4 row-span-2' },
  // tall rectangle
  { src: '/assets/images/creators/americacreators.jpg', span: 'col-span-4 row-span-2' },
  // small square
  // { src: '/assets/images/creators/valuepropimage.jpg',       span: 'col-span-2 row-span-1' },
  // repeat to fill 8 tiles
  { src: '/assets/images/creators/valuepropimage.jpg',      span: 'col-span-4 row-span-2' },
  { src: '/assets/images/creators/haleydwc.png',           span: 'col-span-4 row-span-1' },
  // { src: '/assets/images/creators/groupcreators.jpg', span: 'col-span-2 row-span-1' },
  { src: '/assets/images/creators/creatorfilming.jpg',       span: 'col-span-4 row-span-1' },
]

const tabs = [
  {
    id: 'network',
    label: 'Creator Network',
    icon: UserGroupIcon,
    image: '/assets/images/creatordatabase.png',
    description:
      'Browse & filter thousands of creators by cause, platform & demographics—and receive inbound pitches on your open campaigns.'
  },
  {
    id: 'proposals',
    label: 'Robust Proposals',
    icon: PaperAirplaneIcon,
    image: '/assets/images/proposal.png',
    description:
      'Craft fully customizable, branded proposals—including ad, usage & exclusivity rights—across TikTok, Instagram, and YouTube.'
  },
  {
    id: 'messaging',
    label: 'Messaging',
    icon: ChatBubbleLeftRightIcon,
    image: '/assets/images/messaging.png',
    description:
      'Negotiate deliverables, share feedback, and build trust through secure, threaded conversations—all in‑platform.'
  },
  {
    id: 'management',
    label: 'Content Management',
    icon: DocumentTextIcon,
    image: '/assets/images/socialcurrantheroimageweb.png',
    description:
      'Centralize draft review: annotate assets, request revisions, approve final content, and schedule posts seamlessly.'
  },
  {
    id: 'metrics',
    label: 'Campaign Metrics',
    icon: ChartBarIcon,
    image: '/assets/images/metrics.png',
    description:
      'Monitor real‑time performance for your entire campaign and drill into views, engagement, shares, and comments per post.'
  }
]

const activeTab = ref(tabs[0].id)
const active = computed(() => tabs.find(t => t.id === activeTab.value) || tabs[0])
const activeTabLabel = computed(() => active.value.label)
const activeTabDescription = computed(() => active.value.description)
const currentImage = computed(() => active.value.image)

// Motion settings
// const { motionVariants } = useMotion()
// const panelMotion = {
//   initial: { opacity: 0, x: 20 },
//   enter:   { opacity: 1, x: 0, transition: { duration: 0.4 } }
// }
// const imageMotion = {
//   initial: { opacity: 0, scale: 0.95 },
//   enter:   { opacity: 1, scale: 1, transition: { duration: 0.4 } }
// }

const testimonials = [
  {
    image: '/assets/images/team/will.jpeg',
    quote: 'Working with Social Currant has been a game‑changer for our brand. Their platform seamlessly connects us with top‑notch creators who perfectly align with our values. Highly recommend!',
    name: 'Noah Fisher',
    role: 'Creator Relations Manager'
  },
  {
    image: '/assets/images/team/ashwath.png',
    quote: 'Partnering with Social Currant boosted our campaign engagement by 45%. The streamlined dashboard made it so easy!',
    name: 'Jordan Smith',
    role: 'Marketing Director'
  },
  {
    image: '/assets/images/team/jasmine.png',
    quote: 'The proposal tools and metrics dashboard gave us the confidence to scale our influencer efforts efficiently.',
    name: 'Samuel Lee',
    role: 'Campaign Lead'
  }
]

// const cardMotion = {
//   initial: { opacity: 0, y: 20 },
//   enter:   { opacity: 1, y: 0, transition: { duration: 0.5 } }
// }

const timeline = [
  {
    icon: '/assets/images/growth.png',
    title: 'Discover Your Audience',
    text: 'We analyze where your audiences spend time—and which creator voices they trust most on each platform.'
  },
  {
    icon: '/assets/images/Startup.png',
    title: 'Engage with Stories',
    text: 'Creators co‑create narratives over multiple posts—layering context to build empathy and understanding.'
  },
  {
    icon: '/assets/images/calendar.png',
    title: 'Measure & Iterate',
    text: 'We track shifts in sentiment and engagement in real time—refining content and calls‑to‑action as we go.'
  },
  {
    icon: '/assets/images/enterprise.png',
    title: 'Scale Impact',
    text: 'Successful pilots turn into larger campaigns, unlocking new audiences and deepening creator partnerships.'
  }
]


const expertiseCards = [
  {
    id: 'team',
    pill: 'Our Team of Experts',
    title: 'An Extension of Your Team',
    description:
      'Think of us as part of your team. From strategy to execution, we handle the heavy lifting to ensure seamless campaigns and measurable success.',
    imagePlaceholder: 'Team Illustration',
    image: '/assets/images/accounts.png'
  },
  {
    id: 'strategist',
    pill: 'Your Strategist',
    title: 'A Strategist Just For You',
    description:
      'On existing plans, get a personal Social Currant Strategist to help you build effective campaigns and relationships with Creators.',
    imagePlaceholder: 'Strategist Illustration',
    // image: '/assets/images/expertise/strategist.png'
  },
  {
    id: 'dfy',
    pill: 'Done‑For‑You',
    title: 'Work Done For You',
    description:
      'Have a strategist working directly on your campaigns and communicating with Creators on behalf of your organization on our high‑end subscription.',
    imagePlaceholder: 'DFY Illustration',
    // image: '/assets/images/expertise/dfy.png'
  }
]

// const stepMotion = {
//   initial: { opacity: 0, y: 40 },
//   enter:   { opacity: 1, y: 0, transition: { duration: 0.5 } }
// }

const relationships = [
  {
    id: 'campaigns',
    icon: PresentationChartBarIcon,
    bgClass: 'bg-secondary/10',
    title: 'Run Campaigns',
    description:
      'Launch targeted creator campaigns to introduce your message to new and relevant audiences at scale.',
    bestFor: "Activation and Education & Awareness"
  },
  {
    id: 'ambassadors',
    icon: UserGroupIcon,
    bgClass: 'bg-secondary/10',
    title: 'Brand Ambassador & Fellowship Programs',
    description:
      'Cultivate long‑term ambassadors or fellowship cohorts to deepen creator advocacy and brand alignment.',
    bestFor: "Persuasion & Narrative Change"
  },
  {
    id: 'events',
    icon: PresentationChartBarIcon,
    bgClass: 'bg-secondary/10',
    title: 'Speaking Engagements & Events',
    description:
      'Host webinars, panels, and in‑person events to train creators and foster collaborative campaign ideation.',
    bestFor: "Education & Awareness"
    },
  {
    id: 'houses',
    icon: HomeIcon,
    bgClass: 'bg-secondary/10',
    title: 'Creator Houses',
    description:
      'Create immersive co‑living or co‑working spaces where creators can collaborate on high‑impact content.',
    bestFor: "Activation"
  },
  {
    id: 'dinners',
    icon: GiftIcon,
    bgClass: 'bg-secondary/10',
    title: 'Hosting Creator Dinners',
    description:
      'Organize intimate dinners and networking sessions to build genuine relationships and brainstorm ideas.',
    bestFor: "Relationship Building"
  },
  {
    id: 'brand-events',
    icon: BuildingOffice2Icon,
    bgClass: 'bg-secondary/10',
    title: 'Brand‑Hosted Events',
    description:
      'Partner with creators on live activations—workshops, meetups, and brand experiences that engage communities.',
     bestFor: "Education & Awareness"
  }
]

const stats = [
  {
    number: '86%',
    label: 'of 18–29 year‑olds get news from social media'
  },
  {
    number: '37%',
    label: 'of 18–29 year‑olds regularly get news from creators'
  },
  {
    number: '21%',
    label: 'of all Americans regularly get news from creators'
  },
  {
    number: '68%',
    label: 'of TikTok consumers get news from creators'
  },
  {
    number: '#1',
    label: 'YouTube is the #1 channel in the U.S (Per Nielsen)'
  },
  {
    number: '39%',
    label: 'of people report no trust at all in traditional media '
  },
]

const faqs = ref([
  {
    question: 'How do I launch my first creator campaign?',
    answer:
      'Once you’ve signed up, just click “Create Campaign,” set your goals and budget, and we’ll match you to vetted, cause‑aligned creators in minutes.'
  },
  {
    question: 'Can I manage content revisions in‑platform?',
    answer:
      'Yes—our content management tools let you review drafts, request edits, and approve final assets all without leaving Social Currant.'
  },
  {
    question: 'What metrics will I see in the dashboard?',
    answer:
      'Get real‑time views, engagement rates, shares, and comments—both at the campaign level and on each individual piece of creator content.'
  }
])


const overviewMetrics = ref([
  { key: 'views', label: 'Total Views', value: '350M', icon: EyeIcon },
  { key: 'engRate', label: 'Engagement Rate', value: '8.6%', icon: ChartBarIcon },
  { key: 'likes', label: 'Likes', value: '120K', icon: HeartIcon },
  { key: 'comments', label: 'Comments', value: '5.4K', icon: ChatIcon },
  { key: 'shares', label: 'Shares', value: '8.2K', icon: ShareIcon },
])

const metrics = ref([
  { label: 'Total Views',        value: '350M'   },
  { label: 'Engagement Rate',    value: '8.6%'   },
  { label: 'Likes',              value: '1.2M'   },
  { label: 'Comments',           value: '85K'    },
  { label: 'Shares',             value: '42K'    },
])

const insights = [
  // Problem‐style cards
  {
    type: 'problem',
    icon: PresentationChartBarIcon,
    title: 'Declining TV Reach',
    text: 'Under-49s tuning into cable or broadcast TV has dropped below 40%.'
  },
  {
    type: 'problem',
    icon: UserGroupIcon,
    title: 'Falling Trust',
    text: 'Over half of Americans report decreasing trust in traditional news media.'
  },
  {
    type: 'problem',
    icon: ChatBubbleOvalLeftIcon,
    title: 'Passive News',
    text: 'Younger generations don’t seek out news—they encounter it while scrolling.'
  },
  // Stat‐style cards
  { type: 'stat', icon: EyeIcon,    number: '86%',  label: '18–29s get news via social' },
  { type: 'stat', icon: HeartIcon,  number: '37%',  label: '18–29s follow creators for news' },
  { type: 'stat', icon: ChartBarIcon, number: '21%', label: 'All Americans get news from creators' },
  { type: 'stat', icon: DocumentTextIcon, number: '68%', label: 'TikTok news consumers use creators equally' },
]

const ourCreators = [
  { src: '/assets/images/creators/andrewtownsend.png' },
  { src: '/assets/images/creators/sylvia.png' },
  { src: '/assets/images/creators/yeganeh.png' },
  { src: '/assets/images/creators/kary.png' },
  { src: '/assets/images/creators/abburns.png' },
  { src: '/assets/images/creators/barrie.jpg' },
  // { src: '/assets/images/creators/andrewtownsend.png' },
  // { src: '/assets/images/creators/andrewtownsend.png' },
  // { src: '/assets/images/creators/andrewtownsend.png' },
  // { src: '/assets/images/creators/andrewtownsend.png' },
]

  </script>
  
  <style scoped lang="scss">
  /* make sure your Tailwind config enables arbitrary colors and includes Poppins/Inter fonts */
  .ellipseClip {
  /* elliptical clip at right edge */
  clip-path: ellipse(150% 100% at 0% 50%);
}
  </style>
  
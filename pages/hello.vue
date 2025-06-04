<template>
  <div>
    <HeaderNav />
    <div class="font-inter antialiased">
      <!-- HERO -->
      <HeroSection />
      <img
        class="background-gradient"
        :src="backgroundGradientCircle"
        alt="Background Gradient"
      >
      <OrganizationCarousel />
      <!-- Center Text -->
      <section
        id="narrative-bridge"
        class="py-20 bg-white"
      >
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
          <MissionDriven />
        </div>
      </section>

      <!-- Why Creators -->
      <section
        id="why-creators"
        class="py-20 bg-gradient-to-br from-primary/10 to-secondary/10"
      >
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <!-- Column 1: Heading + Intro -->
          <div class="space-y-6">
            <h2 class="text-4xl md:text-4xl font-bold text-primary">
              The old media model is breaking—creators are where audiences live now
            </h2>
            <p class="text-lg text-gray-700 max-w-lg">
              While traditional outlets lose grip, creators on TikTok, Instagram &amp; YouTube capture attention—and drive engagement that legacy media simply can't match.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(s,i) in stats"
                :key="s.label"
                v-motion-fade-in-up.visible-once
                :style="{ transitionDelay: `${i * 100}ms` }"
                class="bg-secondary/10 p-6 rounded-lg flex flex-col items-center text-center space-y-2"
              >
                <div class="text-4xl font-bold text-primary">
                  {{ s.number }}
                </div>
                <div class="text-gray-700">
                  {{ s.label }}
                </div>
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
                  >
                  <!-- subtle color overlay -->
                  <div class="absolute inset-0 bg-primary/15 mix-blend-color-burn rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- METRICS -->
      <section class="py-20">
        <div class="container mx-auto px-6 text-center space-y-8">
          <h2 class="text-4xl font-bold text-primary">
            Our Reach & Impact
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            By partnering with over 4,800 creators, we have driven meaningful engagement for causes on TikTok, Instagram &amp; YouTube.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              v-for="(metric, i) in impactMetrics"
              :key="metric.label"
              v-motion-fade-in-up
              class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
              :style="{ transitionDelay: `${i * 100}ms` }"
            >
              <component
                :is="metric.icon"
                class="w-10 h-10 text-secondary"
              />
              <div class="text-5xl font-extrabold text-primary">
                {{ metric.value }}
              </div>
              <div class="uppercase tracking-wide text-gray-500">
                {{ metric.label }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Relationships -->
      <section
        id="relationships"
        class="py-20 bg-gradient-to-r from-primary/10 to-secondary/10"
      >
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
                  >
                  <div class="absolute inset-0 bg-primary/15 mix-blend-color-burn rounded-xl" />
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
                  <component
                    :is="item.icon"
                    class="w-6 h-6 text-primary"
                  />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary">
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-700 mt-1">
                    {{ item.description }}
                  </p>
                  <p class="text-gray-700 mt-1 font-semibold">
                    Best for: {{ item.bestFor }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Expertise -->
      <section
        id="expertise"
        class="py-20 bg-white"
      >
        <div class="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left">
            From Strategy to Results, We've Got You Covered
          </h2>
          <NuxtLink
            to="/book-a-demo"
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
              <h3 class="mt-3 text-xl font-bold text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-2 text-gray-700">
                {{ card.description }}
              </p>
            </div>

            <!-- Illustration Placeholder -->
            <div class="p-8 bg-gray-100 flex items-center justify-center">
              <img
                v-if="card.image"
                :src="card.image"
                alt=""
                class="object-cover"
              >
              <span
                v-else
                class="text-gray-400"
              >{{ card.imagePlaceholder }}</span>
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
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              :class="[
                'flex items-center gap-2 px-5 py-2 border-2 rounded-full font-medium transition group',
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
              ]"
              @click="activeTab = tab.id"
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
          <div class="w-4/5 md:w-2/3 mx-auto">
            <img
              :src="currentImage"
              :alt="`Illustration of ${activeTabLabel}`"
              class="w-full rounded-xl shadow-2xl"
            >
          </div>

          <!-- Description -->
          <p
            class="max-w-2xl text-center text-primary text-[22px] px-4"
          >
            {{ activeTabDescription }}
          </p>
        </div>
      </section>

      <!-- Testimonials -->
      <Testimonials />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  ArrowRightIcon,
  PresentationChartBarIcon,
  HomeIcon,
  BuildingOffice2Icon,
  GiftIcon,
  EyeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
  HeartIcon,
} from '@heroicons/vue/24/outline'

// ——————————————————————————
// 1. Import all images from /assets/images
// ——————————————————————————

// Hero background gradient
import backgroundGradientCircle from '~/assets/images/backgroundgradientcircle.svg'

// impactHighlightImages
import imgAndrewGovWalz from '~/assets/images/creators/andrewgovwalz.png'
import imgAmericaCreators from '~/assets/images/creators/americacreators.jpg'
import imgArianaPalestine from '~/assets/images/creators/arianapalestine.png'
import imgHaleyDWC from '~/assets/images/creators/haleydwc.png'
import imgCreatorFilming from '~/assets/images/creators/creatorfilming.jpg'

// ourCreators grid
import imgAndrewTownsend from '~/assets/images/creators/andrewtownsend.png'
import imgSylvia from '~/assets/images/creators/sylvia.png'
import imgYeganeh from '~/assets/images/creators/yeganeh.png'
import imgKary from '~/assets/images/creators/kary.png'
import imgABBurns from '~/assets/images/creators/abburns.png'
import imgBarrie from '~/assets/images/creators/barrie.png'

// expertiseCards
import imgTeamAbbyEllie from '~/assets/images/team/abbyellie.jpg'
import imgAccountManagers from '~/assets/images/team/accountmanagers.png'

// tabs section images
import imgCreatorDatabase from '~/assets/images/platform/creatordatabase.png'
import imgProposal from '~/assets/images/platform/proposal.png'
import imgMessaging from '~/assets/images/platform/messaging.png'
import imgContentManagement from '~/assets/images/platform/contentmanagement.png'
import imgMetrics from '~/assets/images/platform/metrics.png'

// ——————————————————————————
// 2. Computed & reactive state for tabs
// ——————————————————————————

const activeTab = ref('network')
const active = computed(() => {
  return tabs.find((t) => t.id === activeTab.value) || tabs[0]
})
const activeTabLabel = computed(() => active.value.label)
const activeTabDescription = computed(() => active.value.description)
const currentImage = computed(() => active.value.image)

// ——————————————————————————
// 3. Data arrays, now referencing imported variables
// ——————————————————————————

const impactHighlightImages = [
  {
    src: imgAndrewGovWalz,
    span: 'col-span-4 row-span-2',
  },
  {
    src: imgAmericaCreators,
    span: 'col-span-4 row-span-2',
  },
  {
    src: imgArianaPalestine,
    span: 'col-span-4 row-span-2',
  },
  {
    src: imgHaleyDWC,
    span: 'col-span-4 row-span-1',
  },
  {
    src: imgCreatorFilming,
    span: 'col-span-4 row-span-1',
  },
]

const ourCreators = [
  { src: imgAndrewTownsend },
  { src: imgSylvia },
  { src: imgYeganeh },
  { src: imgKary },
  { src: imgABBurns },
  { src: imgBarrie },
]

const expertiseCards = [
  {
    id: 'team',
    pill: 'Our Team of Experts',
    title: 'An Extension of Your Team',
    description:
      'Think of us as part of your team. From strategy to execution, we handle the heavy lifting to ensure seamless campaigns and measurable success.',
    imagePlaceholder: 'Team Illustration',
    image: imgTeamAbbyEllie,
  },
  {
    id: 'strategist',
    pill: 'Your Strategist',
    title: 'A Strategist Just For You',
    description:
      'On existing plans, get a personal Social Currant Strategist to help you build effective campaigns and relationships with Creators.',
    imagePlaceholder: 'Strategist Illustration',
    image: imgAccountManagers,
  },
  {
    id: 'dfy',
    pill: 'Done-For-You',
    title: 'Work Done For You',
    description:
      'Have a strategist working directly on your campaigns and communicating with Creators on behalf of your organization on our high-end subscription.',
    imagePlaceholder: 'DFY Illustration',
    image: imgAccountManagers, 
  },
]

const tabs = [
  {
    id: 'network',
    label: 'Creator Network',
    icon: UserGroupIcon,
    image: imgCreatorDatabase,
    description:
      'Browse & filter thousands of creators by cause, platform & demographics—and receive inbound pitches on your open campaigns.',
  },
  {
    id: 'proposals',
    label: 'Robust Proposals',
    icon: PaperAirplaneIcon,
    image: imgProposal,
    description:
      'Craft fully customizable, branded proposals—including ad, usage & exclusivity rights—across TikTok, Instagram, and YouTube.',
  },
  {
    id: 'messaging',
    label: 'Messaging',
    icon: ChatBubbleLeftRightIcon,
    image: imgMessaging,
    description:
      'Negotiate deliverables, share feedback, and build trust through secure, threaded conversations—all in-platform.',
  },
  {
    id: 'management',
    label: 'Content Management',
    icon: DocumentTextIcon,
    image: imgContentManagement,
    description:
      'Centralize draft review: annotate assets, request revisions, approve final content, and schedule posts seamlessly.',
  },
  {
    id: 'metrics',
    label: 'Campaign Metrics',
    icon: ChartBarIcon,
    image: imgMetrics,
    description:
      'Monitor real-time performance for your entire campaign and drill into views, engagement, shares, and comments per post.',
  },
]

const impactMetrics = [
  { icon: EyeIcon, value: '350M', label: 'Views' },
  { icon: HeartIcon, value: '30.6M', label: 'Engagements' },
  { icon: ChartBarIcon, value: '8.6%', label: 'Avg Engagement' },
  { icon: DocumentTextIcon, value: '4000+', label: 'Content Pieces' },
]

const relationships = [
  {
    id: 'campaigns',
    icon: PresentationChartBarIcon,
    bgClass: 'bg-secondary/10',
    title: 'Run Campaigns',
    description:
      'Launch targeted creator campaigns to introduce your message to new and relevant audiences at scale.',
    bestFor: 'Activation and Education & Awareness',
  },
  {
    id: 'ambassadors',
    icon: UserGroupIcon,
    bgClass: 'bg-secondary/10',
    title: 'Brand Ambassador & Fellowship Programs',
    description:
      'Cultivate long-term ambassadors or fellowship cohorts to deepen creator advocacy and brand alignment.',
    bestFor: 'Persuasion & Narrative Change',
  },
  {
    id: 'events',
    icon: PresentationChartBarIcon,
    bgClass: 'bg-secondary/10',
    title: 'Speaking Engagements & Events',
    description:
      'Host webinars, panels, and in-person events to train creators and foster collaborative campaign ideation.',
    bestFor: 'Education & Awareness',
  },
  {
    id: 'houses',
    icon: HomeIcon,
    bgClass: 'bg-secondary/10',
    title: 'Creator Houses',
    description:
      'Create immersive co-living or co-working spaces where creators can collaborate on high-impact content.',
    bestFor: 'Activation',
  },
  {
    id: 'dinners',
    icon: GiftIcon,
    bgClass: 'bg-secondary/10',
    title: 'Hosting Creator Dinners',
    description:
      'Organize intimate dinners and networking sessions to build genuine relationships and brainstorm ideas.',
    bestFor: 'Relationship Building',
  },
  {
    id: 'brand-events',
    icon: BuildingOffice2Icon,
    bgClass: 'bg-secondary/10',
    title: 'Brand-Hosted Events',
    description:
      'Partner with creators on live activations—workshops, meetups, and brand experiences that engage communities.',
    bestFor: 'Education & Awareness',
  },
]

const stats = [
  {
    number: '86%',
    label: 'of 18–29 year-olds get news from social media',
  },
  {
    number: '37%',
    label: 'of 18–29 year-olds regularly get news from creators',
  },
  {
    number: '21%',
    label: 'of all Americans regularly get news from creators',
  },
  {
    number: '68%',
    label: 'of TikTok consumers get news from creators',
  },
  {
    number: '#1',
    label: 'YouTube is the #1 channel in the U.S (Per Nielsen)',
  },
  {
    number: '39%',
    label: 'of people report no trust at all in traditional media ',
  },
]
</script>

<style scoped lang="scss">
/* styles */
</style>

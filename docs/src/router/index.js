import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import GetData from '@/components/GetData'
import DanishCorpus from '@/components/DanishCorpus'
import Stopwords from '@/components/Stopwords'
import PrepareData from '@/components/PrepareData'
// import DataFormats from '@/components/DataFormats'
import AnalyseData from '@/components/AnalyseData'
import AnalyseWithJupyter from '@/components/AnalyseWithJupyter'
import AnalyseWithVoyant from '@/components/AnalyseWithVoyant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {
        banner: {
          title: 'DATAKUBEN Outreach',
          body: 'Resources and best practices for data-driven science in the humanities'
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: {
        banner: {
          title: 'About DATAKUBEN',
          body: '...'
        }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      props: {
        banner: {
          title: 'Contact',
          body: '...'
        }
      }
    },
    {
      path: '/getData',
      name: 'getData',
      component: GetData,
      props: {
        banner: {
          src: '/assets/corpora.jpg',
          title: 'Get Data',
          body: 'Where to collect data for research'
        }
      }
    },
    {
      path: '/danishCorpus',
      name: 'danishCorpus',
      component: DanishCorpus,
      props: {
        banner: {
          src: '/assets/corpora.jpg',
          title: 'Danish Corpus',
          body: 'Fulltext search of publications in the danish corpus'
        }
      }
    },
    {
      path: '/stopwords',
      name: 'stopwords',
      component: Stopwords,
      props: {
        banner: {
          src: '/assets/corpora.jpg',
          title: 'List of danish stop words',
          body: 'Edit, copy, and paste a list of stopwords for use in jupyter notebooks'
        }
      }
    },
    {
      path: '/prepareData',
      name: 'prepareData',
      component: PrepareData,
      props: {
        banner: {
          src: '/assets/data.jpg',
          title: 'Prepare Data',
          body: 'Options for preparing your data'
        }
      }
    },
    /* {
      path: '/dataFormats',
      name: 'dataFormats',
      component: DataFormats,
      props: {
        banner: {
          src: '/assets/data.jpg',
          title: 'Choose the best data format',
          body: 'Which format is best for your analysis'
        }
      }
    }, */
    {
      path: '/analyse',
      name: 'analyseData',
      component: AnalyseData,
      props: {
        banner: {
          src: '/assets/analyse.jpg',
          title: 'Data Analysis Tools',
          body: 'Analyse your data with Voyant Tools or Jupyter notebooks'
        }
      }
    },
    {
      path: '/analyse/jupyter',
      name: 'analyseWithJupyter',
      component: AnalyseWithJupyter,
      props: {
        banner: {
          src: '/assets/analyse.jpg',
          title: 'Jupyter Notebook Tutorials',
          body: 'Tutorials for data analysis with Jupyter Notebooks'
        }
      }
    },
    {
      path: '/analyse/voyant',
      name: 'analyseWithVoyant',
      component: AnalyseWithVoyant,
      props: {
        banner: {
          src: '/assets/analyse.jpg',
          title: 'Voyant Tools Tutorials',
          body: 'Tutorials for data analysis with Voyant Tools'
        }
      }
    }
  ]
})

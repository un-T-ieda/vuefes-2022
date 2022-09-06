import { IEvent } from '~/types/events'
import {
  SHOW_EVENT_SPEAKER_PROFILE_OSS,
  SHOW_EVENT_SPEAKER_PROFILE_VUE,
  SHOW_EVENT_SPEAKER_PROFILE_PEEPHOLE,
} from '~/utils/feature.constants'

export const eventDescription =
  'Vue Fes Japan では、より Vue.js を楽しんでいただくための企画を多数ご用意しています。セッションの合間にぜひご参加ください。'

export const eventList: IEvent[] = [
  {
    title: 'OSS はじめのいっぽ',
    // TODO: ロゴが確定次第修正
    logoList: [],
    description: `Vue.js をはじめ、多くの OSS は利用者からのフィードバックやコントリビューションによって成り立っています。しかし、協力の意思はあっても、実際どのように参加していけばいいのかわからない方も多いのではないでしょうか？<br>
      このセッションでは、実際に Vue.js 日本ユーザーグループにて OSS 開発に参加・協力しているメンバーが、バグ報告やパッチ提供、OSS 開発への参加やドキュメントサポート、そしてコミュニティの運営など、数多くのコントリビューターとどのように進めているのかをご紹介します。`,
    // TODO: スピーカーが確定次第修正
    isShowSpeakerProfile: SHOW_EVENT_SPEAKER_PROFILE_OSS,
    speakerProfileList: [
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
    ],
  },
  {
    title: 'なるほど Vue コンポーネント',
    logoList: [
      {
        src: '/events/miyaocast.png',
        alt: 'miyaocastのロゴ',
        link: 'https://podcasts.apple.com/us/podcast/id1540114737',
      },
      {
        src: '/events/fm.jpeg',
        alt: 'お元気ですか.fmのロゴ',
        link: 'https://anchor.fm/ogenkidesuka-fm/episodes/fm-vol-01-e15tku0',
      },
    ],
    description:
      '<a class="underline hover:opacity-40 transition" href="https://podcasts.apple.com/us/podcast/id1540114737" target="_blank" rel="noopener">miyaocast</a> + <a class="underline hover:opacity-40 transition" href="https://anchor.fm/ogenkidesuka-fm/episodes/fm-vol-01-e15tku0" target="_blank" rel="noopener">お元気ですか.fm</a> の Vue Fes 合同企画開催です！Vue でコンポーネントをつくるときにどんなことを考えているのか、エンジニア＆デザイナー目線で語ります。Vue3 で開発がどう変わったか、デザインシステム開発についてなど、ざっくばらんなテーマが聴けます！',
    // TODO: スピーカーが確定次第修正
    isShowSpeakerProfile: SHOW_EVENT_SPEAKER_PROFILE_VUE,
    speakerProfileList: [
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
    ],
  },
  {
    title: 'Peephole',
    // TODO: リンク先が確定次第修正
    logoList: [
      {
        src: '/events/peephole.png',
        alt: 'peepholeのロゴ',
      },
    ],
    description:
      '数々の素晴らしいセッションを楽しんだ後は、あのスピーカーが鋭意開発中のナニカをチラ見せ&#x1f440;する新企画、Peephole（ピープホール）をお楽しみください！もしかすると世界に向けて初公開の情報もあるかも……？',
    // TODO: スピーカーが確定次第修正
    isShowSpeakerProfile: SHOW_EVENT_SPEAKER_PROFILE_PEEPHOLE,
    speakerProfileList: [
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
      {
        image: '/events/miyaocast.png',
        title: '社名等入ります。',
        name: '名前入ります。',
        twitter: '#',
        github: '#',
        description:
          '本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。本文入ります。',
      },
    ],
  },
]

export const childcareDescription =
  '今年の Vue Fes では視聴者のお父さんお母さんが集中してカンファレンスを楽しめるよう、託児サポートをご用意いたしました！<br>当日何らかの託児サービスを利用した方には、Vue Fes 運営で費用を補助いたします。'
export const childcareCostSupportConditions = [
  '当日利用したと分かる託児サービスの領収書を保管してください',
  '運営で補助費用の上限額は15,000円です',
  '補助費用は後日運営から口座振り込みします',
]
export const childcareNote =
  '申し込みされた方には vuefes@gmail.com のメールアドレスで10月17日までに領収書と口座情報確認のメールをお送りさせていただきます。'
export const childcareCaution =
  '※ 託児サポートの申込者は先着20名で締め切らせていただきます。予めご了承ください。'

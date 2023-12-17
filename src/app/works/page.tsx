"use client";

import Work from "../components/work";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import ImageModal from "../components/imageModal";

export default function Home() {
  const [values, setOpen] = useState({
    imagePath: "",
    open: false,
  });
  const clickImage = (imagePath: string) => {
    console.log(imagePath);
    setOpen({ imagePath, open: true });
  };
  const close = () => {
    setOpen({ ...values, open: false });
  };

  return (
    <div className="py-24 sm:py-32">
      <ImageModal
        imagePath={values.imagePath}
        open={values.open}
        onClick={close}
      />
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
            My Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-white-600">
            趣味で開発してきたモノたち
            <br />
            プライベートリポジトリのモノもあります
            <br />
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <Work
            title="Portfolio Site"
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "TypeScript",
              "Cloudflare Pages",
            ]}
            iconType="Github"
            url="https://github.com/yumazak/portfolio"
          >
            このサイトです。
          </Work>
          <Work
            title="tabmi"
            tags={["Dart", "Flutter", "Riverpod"]}
            iconType="Github"
            url="https://github.com/yumazak/portfolio"
          >
            ギターTab譜を制作するためのモバイルアプリです。
          </Work>
          <Work
            title="neos"
            tags={["React", "TypeScript", "VScode"]}
            imagePath="/works/neos.webp"
            alt="neos"
            onClick={clickImage}
          >
            感情曲線と脚本を簡単に記述するためのvscode拡張機能。Webview
            APIを使ってYAMLファイルからプレビュー画面を生成します。
          </Work>
          <Work
            title="Neoki Beat"
            tags={["UE5", "MIDI"]}
            imagePath="/works/sound_game.webp"
            alt="sound_game"
            onClick={clickImage}
          >
            自作の音ゲー。MIDI で譜面データを作成し、UE5上で読み込んでいます。
          </Work>
          <Work
            title="All Dash"
            tags={["UE5"]}
            imagePath="/works/alldash.webp"
            alt="alldash"
            onClick={clickImage}
          >
            シンプルな2D横スクロールアクションゲーム。T-Rex Dinosaur
            Gameのような感じです。
          </Work>
          <Work
            title="Keiba"
            tags={["UE5", "blender", "Node.js"]}
            imagePath="/works/keiba.webp"
            alt="keiba"
            onClick={clickImage}
          >
            競馬風レースゲーム。(Todo)Youtube
            チャットをストリーミングしてリアルタイムで参加・投票ができるようにする予定です。
          </Work>
          <Work
            title="bl2pa"
            tags={["Minecraft", "blender", "Node.js", "Python"]}
            imagePath="/works/bl2pa.webp"
            alt="bl2pa"
            onClick={clickImage}
          >
            blender で
            3Dモデルを点群に変換しPythonで頂点およびカラー情報を計算、その後パーティクルコマンドに変換しMinecraft
            で再生するツール。複雑なアニメーションにも対応。
          </Work>
          <Work
            title="particle-video"
            tags={["Minecraft", "Node.js"]}
            imagePath="/works/particle_video.webp"
            alt="particle-video"
            onClick={clickImage}
          >
            画像や動画を Minecraft のパーティクルコマンドに変換し、Minecraft
            上で再生するツール。
          </Work>
          <Work
            title="自動字幕生成ツール"
            tags={["Python", "Lua", "Davinci Resolve", "Whisper"]}
            iconType="Github"
          >
            Whisperで文字起こしをして、Davicni Resolve
            のテキストを自動で生成するスクリプト
          </Work>
          <Work
            title="Audio Reactive"
            tags={["UE5", "blender"]}
            imagePath="/works/ue_sound_minecraft.webp"
            alt="ue_sound_minecraft"
            onClick={clickImage}
          >
            UE5
            でサウンドに合わせてオブジェクトを生成し、その中央をスティーブが歩き続ける作品。SSDが壊れてプロジェクトデータが消えてしまいました。
          </Work>
          <Work
            title="Chapter Generator"
            tags={["Lua", "Davinci Resolve"]}
            imagePath="/works/chapter_generator.webp"
            alt="chapter_generator"
            onClick={clickImage}
          >
            Davinci Resolve でタイムラインマーカーの位置を元に Youtube
            のチャプター文字列を生成するツール。
          </Work>
          <Work
            title="BTC Indicators Dashboard"
            tags={["Vue.js", "Nuxt.js"]}
            imagePath="/works/btc-dashboard.webp"
            alt="btc dashboard"
            url="https://jetbtc.netlify.app"
            onClick={clickImage}
          >
            仮想通貨の指標をまとめて監視できるツール
          </Work>
          <Work
            title="SmokeTimer"
            tags={["Electron", "Vue.js"]}
            iconType="Github"
            url="https://github.com/yumazak/SmokeTimer"
            onClick={clickImage}
          >
            喫煙頻度を落とすために作った常時最前面に表示される小さな喫煙タイマー。
          </Work>
          <Work
            title="chip8rs"
            tags={["Rust"]}
            iconType="Github"
            url="https://github.com/yumazak/chip8rs"
            onClick={clickImage}
          >
            リアルタイムVJシステムです。MIDIキーボードからパラメータ調整可能。
          </Work>
          <Work
            title="VJ"
            tags={["Unity", "MIDI"]}
            imagePath="/works/vjgif.gif"
            alt="vj"
            onClick={clickImage}
          >
            リアルタイムVJシステムです。MIDIキーボードからパラメータ調整可能。
          </Work>
          <Work
            title="KISS Client"
            tags={["Swift"]}
            iconType="Github"
            url="https://github.com/yumazak/KISS-Client"
            onClick={clickImage}
          >
            KISSのMacクライアントです。Macでのキー入力を無効化しつつサーバーに入力イベントを送るのにてこずりました。
          </Work>
          <Work
            title="KISS"
            tags={["Rust"]}
            iconType="Github"
            url="https://github.com/yumazak/KISS"
            onClick={clickImage}
          >
            MacからWindowsにキーボード入力できるやつです。こちらはWindows側で動かすサーバーです。MacクライアントからUDP通信でキー入力を受け取れます。
          </Work>
          <Work
            title="ere"
            tags={["Rust", "MIDI"]}
            iconType="Github"
            url="https://github.com/yumazak/ere"
            onClick={clickImage}
          >
            Eleven
            Rackを操作するためにフットコントローラーが欲しかったので、MIDIコントローラから操作できるものを作りました。RustでWin32
            API通して登録した座標をクリックする感じです。
          </Work>
          <Work
            title="Server Watcher"
            tags={["Rust", "Vue.js"]}
            imagePath="/works/server_watcher.webp"
            alt="server_watcher"
            onClick={clickImage}
          >
            サーバリソース監視ツール。サーバ監視のクライアントとサーバ、DashBoardのAPIサーバにRustを使っています。
          </Work>
          <Work
            title="motiva"
            tags={["Vue.js"]}
            imagePath="/works/motiva.webp"
            alt="motiva"
            url="https://motiva.netlify.app/"
            onClick={clickImage}
          >
            自己分析をする時、モチベーショングラフを書こうと思ったのですが、紙に書くのが嫌すぎてツールを作りました。PWAです。
          </Work>
          <Work
            title="rustatic"
            tags={["Rust"]}
            iconType="Github"
            url="https://github.com/yumazak/rustatic"
            onClick={clickImage}
          >
            静的サイトジェネレーターもどき。ブログを始めようと思ったから作りました。
          </Work>
          <Work
            title="Rust Line Bot"
            tags={["Rust", "Heroku"]}
            imagePath="/works/linebot.webp"
            alt="linebot"
            onClick={clickImage}
          >
            Rust製の自作api wrapperを使ってline
            botを作りました。気温と天気表示、todoタスクを実装しました。
          </Work>
          <Work
            title="line-messaging-api-rust"
            tags={["Rust"]}
            iconType="Github"
            url="https://github.com/yumazak/line-messaging-api-rust"
            onClick={clickImage}
          >
            Line Messaging API Wrapper。Rust用のSDKが無かったので作りました。
          </Work>
          <Work
            title="Gradation"
            tags={["IndexedDB", "Vue.js"]}
            imagePath="/works/gradation.gif"
            alt="gradation"
            url="https://github.com/yumazak/gradation"
            onClick={clickImage}
          >
            ProcessingでVJぽい遊びができるツール。Arduinoと連携して遊ぶこともできる
          </Work>
          <Work
            title="PWA時間割"
            tags={["IndexedDB", "Vue.js"]}
            imagePath="/works/pwa_jikanwari.webp"
            alt="pwa_jikanwari"
            onClick={clickImage}
          >
            当時話題になり立てだったPWAとIndexedDBに触れてみたかったので作ってみました。
          </Work>
          <Work
            title="Kogera"
            tags={["Node.js", "Angular.js"]}
            imagePath="/works/kogera.webp"
            alt="Kogera"
            onClick={clickImage}
          >
            Angular製のTwitter Viewer
          </Work>
          <Work
            title="Rust-BlockChain"
            tags={["Rust"]}
            iconType="Github"
            url="https://github.com/yumazak/bom"
            onClick={clickImage}
          >
            Rustで実装したシンプルなBlockChain
          </Work>
          <Work
            title="BOM"
            tags={["Rust"]}
            iconType="Github"
            url="https://github.com/yumazak/Rust-BlockChain"
            onClick={clickImage}
          >
            ボイラープレートをCLIで管理するシンプルなRust製ツールです。
          </Work>
          <Work
            title="JATTS"
            tags={["Java"]}
            imagePath="/works/jatts.webp"
            alt="Jatts"
            onClick={clickImage}
          >
            大学の課題において、Javaを使用して特定のキーワードを含むツイートをリアルタイムでストリーミングするアプリケーションを開発しました。
          </Work>
          <Work
            title="日本の景色bot"
            tags={["Ruby"]}
            iconType="twitter"
            url="https://twitter.com/jp_scenery"
          >
            日本の景色のライブ写真を呟くTwitter
            bot。スクレイピングして写真を取ってきます。
          </Work>
          <Work
            title="Dream"
            tags={["Amazon Cognito", "Vue.js"]}
            imagePath="/works/dream.webp"
            alt="Dream"
            onClick={clickImage}
          >
            AWSインターンシップのハッカソンでチーム開発したもの。機械学習によりユーザーが選択した興味のある言葉に関連する職業を提示するサービス。
          </Work>
        </ul>
      </div>
    </div>
  );
}

'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { faPersonDigging, faHandPeace, faHand, faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"


export default function Prepare() {
    return (
        <>
            <div className="m-auto text-center pt-20 pb-20">
                {/* <FontAwesomeIcon icon={faFaceFrown} className="text-[100px]" /> */}
                <FontAwesomeIcon icon={faPersonDigging} className="text-[100px] pb-7" />
                <p className="text-[20px] md:text-[30px]">このページは現在準備中です。</p>
                <Janken />
            </div>

        </>
    )
}


function Janken() {

    const hands = [
        faHandBackFist, // グー
        faHandPeace,    // チョキ
        faHand          // パー
    ]

    const [userHand, setUserHand] = useState<number | null>(null)
    const [computerHand, setComputerHand] = useState<number | null>(null)
    const [phase, setPhase] = useState("start")
    const [result, setResult] = useState("")

    function startGame() {
        setPhase("waiting")
        setUserHand(null)
        setComputerHand(null)
        setResult("")
    }

    function chooseHand(hand: number) {
        setUserHand(hand)
        setPhase("janken")

        setTimeout(() => {

            const com = Math.floor(Math.random() * 3)
            setComputerHand(com)
            setPhase("pon")

            setTimeout(() => {
                judge(hand, com)
                setPhase("result")
            }, 1000)

        }, 2000)
    }

    function judge(user: number, com: number) {

        const res = (com - user + 3) % 3

        if (res === 0) setResult("あいこ")
        if (res === 1) setResult("勝ち！")
        if (res === 2) setResult("負け...")
    }

    return (
        <div className="text-center mt-10 pb-40 pt-10">

            {phase === "start" && (
                <button
                    className="bg-blue-300 px-6 py-3 rounded"
                    onClick={startGame}
                >
                    スタート
                </button>
            )}

            {phase !== "start" && (

                <>
                    {/* 手選択 */}
                    <section className="flex justify-center gap-10 mt-10">

                        <button
                            className="h-20 w-20 bg-green-100 cursor-grabbing"
                            disabled={userHand !== null}
                            onClick={() => chooseHand(0)}
                        >
                            <FontAwesomeIcon icon={hands[0]} size="2x" />
                        </button>

                        <button
                            className="h-20 w-20 bg-red-100 cursor-pointer"
                            disabled={userHand !== null}
                            onClick={() => chooseHand(1)}
                        >
                            <FontAwesomeIcon icon={hands[1]} size="2x" />
                        </button>

                        <button
                            className="h-20 w-20 bg-yellow-100 cursor-grab"
                            disabled={userHand !== null}
                            onClick={() => chooseHand(2)}
                        >
                            <FontAwesomeIcon icon={hands[2]} size="2x" />
                        </button>

                    </section>

                    {/* 手表示 */}
                    <div className="flex justify-center gap-20 mt-10 text-center">

                        <div>
                            <p>あなた</p>
                            {userHand !== null && (
                                <FontAwesomeIcon
                                    icon={hands[userHand]}
                                    className="text-6xl mt-2"
                                />
                            )}
                        </div>

                        <div>
                            <p>コンピュータ</p>
                            {computerHand !== null && (
                                <FontAwesomeIcon
                                    icon={hands[computerHand]}
                                    className="text-6xl mt-2"
                                />
                            )}
                        </div>

                    </div>

                    {/* メッセージ */}
                    <div className="mt-10 text-2xl">

                        {phase === "janken" && "じゃんけん…"}
                        {phase === "pon" && "ぽん！"}
                        {phase === "result" && result}

                    </div>

                    {/* もう一回 */}
                    {phase === "result" && (
                        <button
                            className="mt-6 bg-blue-300 px-5 py-2 rounded"
                            onClick={startGame}
                        >
                            もう一回
                        </button>
                    )}

                </>
            )}

        </div>
    )
}
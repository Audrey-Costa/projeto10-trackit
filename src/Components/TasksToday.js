import styled from "styled-components"

export default function TasksToday({style, taskName, currentSequence, highestSequence, taskDone, taskMark}){
    return (
        <Container style={style}>
            <div>
                <h2>{taskName}</h2>
                <h3>Sequência atual: <strong>{currentSequence} {currentSequence===1 ? "dia":"dias"}</strong></h3>
                <h3>Seu recorde: <strong>{highestSequence} {highestSequence===1 ? "dia":"dias"}</strong></h3>
            </div>
            <div onClick={taskMark} style={taskDone ? {backgroundColor: '#8FC549'} :{backgroundColor: '#E5E5E5'}}>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
position: relative;
    width: 90%;
    height: 90px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;

    > div:first-child{
        margin-left: 20px;    
    }

    div:first-child h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    div:first-child h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 25px;
        color: #666666;
    }

    div:first-child strong:first-child{
        color: #8FC549;
    }

    div:last-child{
        position: absolute;
        right: 20px;
        width: 70px;
        height: 70px;
        border-radius: 5px;;
    }

    div:last-child div:first-child{
        position: absolute;
        width: 30px;
        height: 10px;
        top: 35px;
        left: 6px;
        background-color: #FFFFFF;
        border-radius: 5px;
        rotate: 45deg;
    }

    div:last-child div:last-child{
        position: absolute;
        width: 50px;
        height: 10px;
        top: 30px;
        left: 20px;
        background-color: #FFFFFF;
        rotate: -45deg;
    }
`
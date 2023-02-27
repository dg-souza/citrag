import { useState, useRef } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

import {
    Container
} from './style'

const Canvas = () => {
    const [tool, setTool] = useState('pen');
    const [lines, setLines] = useState([]);
    const [colorLine, setColorLine] = useState('black')
    const isDrawing = useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y], color: colorLine }]);
    };

    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <Container>
            <Stage
                width={1000}
                height={500}
                style={{ backgroundColor: '#fff', borderRadius: '5px' }}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.color}
                            strokeWidth={5}
                            tension={0.5}
                            lineCap="round"
                            lineJoin="round"
                            globalCompositeOperation={
                                line.tool === 'eraser' ? 'destination-out' : 'source-over'
                            }
                        />
                    ))}
                </Layer>
            </Stage>

            <button onClick={() => setTool('eraser')}>Eraser</button>
            <button onClick={() => setTool('pen')}>Pencil</button>
            
            <input type="color" onChange={(e) => setColorLine(e.target.value)}/>
        </Container>
    )
}

export default Canvas
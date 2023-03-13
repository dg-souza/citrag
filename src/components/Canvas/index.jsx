import { useState, useRef } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

import { Container } from "./style";

const Canvas = () => {
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const [colorLine, setColorLine] = useState("black");
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
        height={300}
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          width: "1000px",
          border: "solid 1px #000",
          boxShadow: "box-shadow: 0px 1px 4px 0px #000000",
        }}
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
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>
      <div className="btn-color">
        <button onClick={() => setTool("eraser")}>Eraser</button>
        <button onClick={() => setTool("pen")}>Pencil</button>

        <input type="color" onChange={(e) => setColorLine(e.target.value)} />
      </div>
    </Container>
  );
};

export default Canvas;

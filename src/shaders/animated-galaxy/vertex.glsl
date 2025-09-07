uniform float uSize;
uniform float uTime;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;

void main() {
   vec4 modelProjection = modelMatrix * vec4(position, 1.0);

   // Spin
   float angle = atan(modelProjection.x, modelProjection.z);
   float distanceToCenter = length(modelProjection.xz);
   float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
   angle += angleOffset;

   modelProjection.x = cos(angle) * distanceToCenter;
   modelProjection.z = sin(angle) * distanceToCenter;

   // Randomness
   modelProjection.xyz += aRandomness;

   vec4 viewProjection = viewMatrix * modelProjection;
   vec4 projectedPosition = projectionMatrix * viewProjection;
   gl_Position = projectedPosition;

   gl_PointSize = abs(sin(uSize) * aScale);
   gl_PointSize *= (1.0 / -viewProjection.z);

   vColor = color;
}
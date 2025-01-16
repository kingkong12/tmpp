1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/my-react-app.git
   cd my-react-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the app running.

5. Assumptions

- Assumption: For devices with resolutions below 1280px, the app is treated as running on a mobile device. The current production version includes additional breakpoints around 780px, which help prevent image overlap issues.

- The bold font characters are not loading properly due to asset-related issue.

-     To optimize performance, we propose combining the SVGs for the circular icon and desktop/mobile images. While responsive programming for these elements is possible, the SVG approach is far more lightweight and highly performance-efficient. Therefore, to avoid overengineering, I am deprioritizing the implementation for now.

- Margins and padding around the forms, text, and images have been assumed since Figma provided only a read-only mode (with no access to specific margin and padding details). Additionally, the reference example contained negative margins, which are considered an incorrect implementation.

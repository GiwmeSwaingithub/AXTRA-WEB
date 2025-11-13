    const channels = [
      // Sports channels - these will navigate directly to the URL
      {id:1,name:'Premier League',category:'Sports',desc:'Live Premier League matches',thumb:'https://images.unsplash.com/photo-1517927033932-b3b2bd32a9a5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c6a3a6f3b1b9f2b',live:true,streamUrl:'https://axtra.eduniapps.com/premierleague',viewers:'24.5K', navigate: true},
      {id:2,name:'Football',category:'Sports',desc:'Live football matches',thumb:'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=a5f9d4f3e6a1b2c3',live:true,streamUrl:'https://axtra.eduniapps.com/football',viewers:'18.2K', navigate: true},
      {id:3,name:'F1 Racing',category:'Sports',desc:'Formula 1 racing',thumb:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB3CAMAAADSMpnKAAAAaVBMVEX/////AQD/AAD/2Nj/GRn/aWn/Jib/9vb/Cgr/w8P//Pz/5OT/3Nz/6ur/+fn/UVH/8PD/Li7/Pz//V1f/d3f/srL/ubn/ZGT/bW3/Xl7/lZX/iYn/qan/f3//Ojr/pKT/ysr/np7/SUn5T2NHAAACrUlEQVR4nO2X6Y6jMAyAPWnLHW6GcrSlff+HnIQe2hKXiYFdaSV//ZcI1/kIjgPAMAzDMAzDMAzDMAzDMAzDMP8ncSrDKNqtBSBFx11yQlF/Kuvkds6c/TrEBeDmIePHmJRQWBViM74hvWHjR1JK8pTph77070ugvw/D5oTQnhKBTNQUT7LTCW3EwxMyTvI05MJCiaUpIXoIEoFMUDzF7XaWtvIUHISwUmJlSnuCAtmcJE/yvLUnN8E8HQie0mzqaY0pnRM0AploAvucImdTT57yVKz1JB2Ckl9N6ZyCWiATRE/4xljG3ocY90TISe6RdY94e2cB/runpymap8xYlU6oaXs/ki4h0IugQT1RaoHpSb2BNhpDBHEcuzRUFT4gBU8Uaz11EsAd+rZs8tzZe/YIUX3wRKmZIeJJbQp1NJ+9JZu8Mj1pUyIheNohnvIIgn78B+yTnGM8W9Z7coxuRyRSf9BL6tTo6Wh4UqtL7FNC91OSgswXlfexp8M9ERry0dPkDC9ckNmyzlPv8RLzdFvlSXl2dbuwQJN69gpQY54aiidTiGjiewuzwJTuM1FPlO8O86Rzytd4QkoexVOUGUJ0X/GHJ5Kpv+ZJneEp4smqZipPR8xTsczT6wyfenocWVZ89ESpmYgndccwPKmwp/7b/5Xhg6eE4GmXmUJKuNfM96W2llG1J/Pet9ZTiewn4VW2IUvUU2qf08TTeIafUE+DZcS7p+m9b/Q0dF07XMDt5hPEPKmcXNPTt+0yT5in25hG6ifhRUCfybkAhie1pm6VJ3h4er/3Pfe4PEB/9E9dOBNA9XQGbQDu2RileDLJn68rrOHqi2ouKVnWhwm1qntxNx1uBtuc+mYaUVG+vlrZQrXrouvs62MYhmEYhmEYhmEYhmEYhmEYhmH+AT/KYTGDu72/ZgAAAABJRU5ErkJggg==',live:true,streamUrl:'https://axtra.eduniapps.com/F1',viewers:'40.7K', navigate: true},
      
      // Cartoon channels - these will be embedded
      {id:4,name:'Disney Channel Animation',category:'Cartoon',desc:'Disney animated shows',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc',live:true,streamUrl:'https://www.youtube.com/embed/8z_xyfgl3mM',viewers:'15.8K', navigate: false},
      {id:5,name:'Miraculous Ladybug',category:'Cartoon',desc:'Miraculous Ladybug episodes',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=def',live:false,streamUrl:'https://www.youtube.com/embed/mdwFQNvAj60',viewers:'21.3K', navigate: false},
      {id:6,name:'Emma And Joey',category:'Cartoon',desc:'Emma And Joey animated series',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi',live:true,streamUrl:'https://www.youtube.com/embed/-VBxijFm50Y',viewers:'9.7K', navigate: false},
      {id:7,name:'Marvel HQ',category:'Cartoon',desc:'Marvel animated series',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=jkl',live:false,streamUrl:'https://www.youtube.com/embed/2PzfL3zrE-o',viewers:'8.4K', navigate: false},
      {id:8,name:'SpongeBob SquarePants',category:'Cartoon',desc:'SpongeBob SquarePants episodes',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=mno',live:true,streamUrl:'https://www.youtube.com/embed/kzcUBov6QBI',viewers:'7.1K', navigate: false},
      {id:9,name:'Disney Jr.',category:'Cartoon',desc:'Disney Junior shows',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=pqr',live:true,streamUrl:'https://www.youtube.com/embed/FPAVYRiJb84',viewers:'11.5K', navigate: false},
      {id:10,name:'Total Drama',category:'Cartoon',desc:'Total Drama animated series',thumb:'https://images.unsplash.com/photo-1598890777032-bde8354c4084?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=stu',live:false,streamUrl:'https://www.youtube.com/embed/Q0zx1vpTghg',viewers:'5.3K', navigate: false},
      
      // News channels - these will be embedded
      {id:11,name:'FRANCE 24 English',category:'News',desc:'International news coverage',thumb:'https://images.unsplash.com/photo-1529245019870-59c3d6f0b6f9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc',live:true,streamUrl:'https://www.youtube.com/embed/Ap-UM1O9RBU',viewers:'32.8K', navigate: false},
      {id:12,name:'NBC News',category:'News',desc:'Breaking news & analysis',thumb:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=def',live:false,streamUrl:'https://www.youtube.com/embed/wZuRLBIL9MI',viewers:'8.9K', navigate: false},
      {id:13,name:'DW News',category:'News',desc:'German international news',thumb:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi',live:true,streamUrl:'https://www.youtube.com/embed/LuKwFajn37U',viewers:'15.6K', navigate: false},
      {id:14,name:'ABC News',category:'News',desc:'American news network',thumb:'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=jkl',live:true,streamUrl:'https://www.youtube.com/embed/iipR5yUp36o',viewers:'12.4K', navigate: false},
      {id:15,name:'Citizen TV Kenya',category:'News',desc:'Kenyan news channel',thumb:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=mno',live:true,streamUrl:'https://www.youtube.com/embed/PGIalZd9WPs',viewers:'18.7K', navigate: false},
      {id:16,name:'NTV Kenya',category:'News',desc:'Kenyan television network',thumb:'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=pqr',live:false,streamUrl:'https://www.youtube.com/embed/CJcAxIxIJMo',viewers:'9.2K', navigate: false},
      {id:17,name:'Bloomberg Television',category:'News',desc:'Financial news network',thumb:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=stu',live:true,streamUrl:'https://www.youtube.com/embed/iEpJwprxDdk',viewers:'7.8K', navigate: false},
      
      // Additional channels for other categories
      {id:18,name:'FutureTech Live',category:'Tech',desc:'Product launches & demos',thumb:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=jkl',live:true,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'22.1K', navigate: false},
      {id:19,name:'AI Stream',category:'Tech',desc:'AI talks & coding streams',thumb:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=mno',live:false,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'14.3K', navigate: false},
      {id:20,name:'CyberLab',category:'Tech',desc:'Security research & demos',thumb:'https://images.unsplash.com/photo-1555949963-aa79dcee981f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=pqr',live:true,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'16.9K', navigate: false},
      {id:21,name:'Pro Gamers',category:'Gaming',desc:'Tournaments & speedruns',thumb:'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=stu',live:true,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'45.2K', navigate: false},
      {id:22,name:'Indie Play',category:'Gaming',desc:'Indie dev streams & playtests',thumb:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=vwx',live:false,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'12.8K', navigate: false},
      {id:23,name:'Chill Vibes',category:'Music',desc:'24/7 lo-fi & chillhop',thumb:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=aaa',live:true,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'28.5K', navigate: false},
      {id:24,name:'EDM Stage',category:'Music',desc:'Live DJ sets & festivals',thumb:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=bbb',live:true,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'32.1K', navigate: false},
      {id:25,name:'Travel Live',category:'Lifestyle',desc:'Travel cams & vlogs',thumb:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ddd',live:true,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'15.7K', navigate: false},
      {id:26,name:'Cooking 24',category:'Lifestyle',desc:'Live cooking shows',thumb:'https://images.unsplash.com/photo-1512058564366-c9e3f8a5ff6b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=eee',live:false,streamUrl:'https://www.youtube.com/embed/5qap5aO4i9A',viewers:'10.2K', navigate: false}
    ];

    const state = {
      query: '',
      liveOnly: false,
      currentChannel: null
    };

    const categories = ['Sports', 'Cartoon', 'News', 'Tech', 'Gaming', 'Music', 'Lifestyle'];

    function init() {
      renderCategorySections();
      attachUI();
    }

    function renderCategorySections() {
      const container = document.getElementById('channels-container');
      container.innerHTML = '';
      
      categories.forEach(category => {
        const categoryChannels = channels.filter(ch => ch.category === category);
        
        if (categoryChannels.length > 0) {
          const section = document.createElement('div');
          section.className = 'category-section';
          section.innerHTML = `
            <div class="category-header">
              <h2 class="category-title">${category}</h2>
              <div>
                <span class="muted">${categoryChannels.length} channels</span>
                <button class="see-all-btn" data-category="${category}">See All</button>
              </div>
            </div>
            <div class="category-scroll" id="scroll-${category.toLowerCase()}">
              ${categoryChannels.map(ch => `
                <div class="card" data-id="${ch.id}" tabindex="0">
                  <div class="thumb" style="background-image:url(${ch.thumb})"></div>
                  <div class="info">
                    <p class="title">${ch.name}</p>
                    <div class="meta">
                      <span class="category-badge ${ch.category.toLowerCase()}">${ch.category}</span>
                      ${ch.live ? '<span class="badge live">LIVE</span>' : '<span class="badge offline">OFF AIR</span>'}
                    </div>
                    <p class="muted" style="margin-top:4px;font-size:11px">${ch.desc}</p>
                    ${ch.viewers ? `<div class="viewers" style="margin-top:4px"><span class="live-indicator"></span><span>${ch.viewers} viewers</span></div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          `;
          
          container.appendChild(section);
          
          // Add click events to the cards
          section.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => openChannel(card.dataset.id));
          });
          
          // Add click event to "See All" button
          section.querySelector('.see-all-btn').addEventListener('click', (e) => {
            showAllChannels(e.target.dataset.category);
          });
        }
      });
    }

    function openChannel(id) {
      const ch = channels.find(c => String(c.id) === String(id));
      if (!ch) return;
      
      // If it's a sports channel, navigate directly to the URL
      if (ch.navigate) {
        window.open(ch.streamUrl, '_blank');
        return;
      }
      
      // Update state
      state.currentChannel = ch;
      
      // Update active player section
      document.getElementById('playerTitle').textContent = ch.name;
      document.getElementById('playerDesc').textContent = ch.desc;
      document.getElementById('playerViewers').textContent = ch.viewers + ' viewers';
      
      // Convert YouTube watch URLs to embed URLs
      let embedUrl = ch.streamUrl;
      if (embedUrl.includes('youtube.com/watch?v=')) {
        const videoId = embedUrl.split('v=')[1];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      document.getElementById('playerIframe').src = embedUrl;
      
      // Show active player
      document.getElementById('activePlayer').classList.add('show');
      
      // Show related channels
      showRelatedChannels(ch.category, ch.id);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showRelatedChannels(category, currentId) {
      const relatedChannels = channels.filter(ch => 
        ch.category === category && ch.id !== parseInt(currentId)
      );
      
      if (relatedChannels.length > 0) {
        document.getElementById('relatedTitle').textContent = `More ${category} Channels`;
        document.getElementById('relatedScroll').innerHTML = relatedChannels.map(ch => `
          <div class="card" data-id="${ch.id}" tabindex="0">
            <div class="thumb" style="background-image:url(${ch.thumb})"></div>
            <div class="info">
              <p class="title">${ch.name}</p>
              <div class="meta">
                <span class="category-badge ${ch.category.toLowerCase()}">${ch.category}</span>
                ${ch.live ? '<span class="badge live">LIVE</span>' : '<span class="badge offline">OFF AIR</span>'}
              </div>
              <p class="muted" style="margin-top:4px;font-size:11px">${ch.desc}</p>
              ${ch.viewers ? `<div class="viewers" style="margin-top:4px"><span class="live-indicator"></span><span>${ch.viewers} viewers</span></div>` : ''}
            </div>
          </div>
        `).join('');
        
        document.getElementById('relatedChannels').style.display = 'block';
        
        // Add click events to related channels
        document.getElementById('relatedScroll').querySelectorAll('.card').forEach(card => {
          card.addEventListener('click', () => openChannel(card.dataset.id));
        });
      } else {
        document.getElementById('relatedChannels').style.display = 'none';
      }
    }

    function showAllChannels(category) {
      const categoryChannels = channels.filter(ch => ch.category === category);
      
      // Create a modal to show all channels in this category
      const modal = document.createElement('div');
      modal.className = 'modal open';
      modal.innerHTML = `
        <div class="player">
          <div class="toolbar">
            <h2>All ${category} Channels</h2>
            <button class="btn" id="closeAllModal">Close</button>
          </div>
          <div class="all-channels-grid">
            ${categoryChannels.map(ch => `
              <div class="card" data-id="${ch.id}" style="flex: 1 1 auto;">
                <div class="thumb" style="background-image:url(${ch.thumb})"></div>
                <div class="info">
                  <p class="title">${ch.name}</p>
                  <div class="meta">
                    <span class="category-badge ${ch.category.toLowerCase()}">${ch.category}</span>
                    ${ch.live ? '<span class="badge live">LIVE</span>' : '<span class="badge offline">OFF AIR</span>'}
                  </div>
                  <p class="muted" style="margin-top:4px;font-size:11px">${ch.desc}</p>
                  ${ch.viewers ? `<div class="viewers" style="margin-top:4px"><span class="live-indicator"></span><span>${ch.viewers} viewers</span></div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Add click events to the cards in the modal
      modal.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
          openChannel(card.dataset.id);
          document.body.removeChild(modal);
        });
      });
      
      // Add close event
      modal.querySelector('#closeAllModal').addEventListener('click', () => {
        document.body.removeChild(modal);
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      });
    }

    function applyFilters() {
      let filteredChannels = channels.slice();
      
      if (state.liveOnly) {
        filteredChannels = filteredChannels.filter(c => c.live);
      }
      
      if (state.query && state.query.trim() !== '') {
        const q = state.query.toLowerCase();
        filteredChannels = filteredChannels.filter(c => 
          c.name.toLowerCase().includes(q) || 
          c.desc.toLowerCase().includes(q) || 
          c.category.toLowerCase().includes(q)
        );
      }
      
      // Show filtered results in a single section
      const container = document.getElementById('channels-container');
      container.innerHTML = `
        <div class="category-section">
          <div class="category-header">
            <h2 class="category-title">Search Results</h2>
            <span class="muted">${filteredChannels.length} channels</span>
          </div>
          <div class="category-scroll">
            ${filteredChannels.map(ch => `
              <div class="card" data-id="${ch.id}" tabindex="0">
                <div class="thumb" style="background-image:url(${ch.thumb})"></div>
                <div class="info">
                  <p class="title">${ch.name}</p>
                  <div class="meta">
                    <span class="category-badge ${ch.category.toLowerCase()}">${ch.category}</span>
                    ${ch.live ? '<span class="badge live">LIVE</span>' : '<span class="badge offline">OFF AIR</span>'}
                  </div>
                  <p class="muted" style="margin-top:4px;font-size:11px">${ch.desc}</p>
                  ${ch.viewers ? `<div class="viewers" style="margin-top:4px"><span class="live-indicator"></span><span>${ch.viewers} viewers</span></div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
      // Add click events to the filtered cards
      container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openChannel(card.dataset.id));
      });
    }

    function attachUI() {
      document.getElementById('searchInput').addEventListener('input', e => {
        state.query = e.target.value;
        if (state.query.trim() === '') {
          renderCategorySections();
        } else {
          applyFilters();
        }
      });
      
      document.getElementById('liveOnlyBtn').addEventListener('click', () => {
        state.liveOnly = !state.liveOnly;
        if (state.liveOnly || state.query) {
          applyFilters();
        } else {
          renderCategorySections();
        }
      });
      
      // keyboard escape
      window.addEventListener('keyup', e => {
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('.modal');
          modals.forEach(modal => {
            if (modal.parentNode) {
              modal.parentNode.removeChild(modal);
            }
          });
        }
      });
    }

    // init on load
    document.addEventListener('DOMContentLoaded', init);

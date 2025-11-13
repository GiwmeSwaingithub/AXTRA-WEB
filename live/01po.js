    const channels = [
      // Sports channels - these will navigate directly to the URL
      {id:1,name:'Premier League',category:'Sports',desc:'Live Premier League matches',thumb:'data:image/jpeg;base64,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',live:true,streamUrl:'https://axtra.eduniapps.com/premierleague',viewers:'64.5K', navigate: true},
      {id:2,name:'Football',category:'Sports',desc:'Live football matches',thumb:'https://c.ndtvimg.com/2022-12/et5v66uo_messi-trophy-afp_625x300_21_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',live:true,streamUrl:'https://axtra.eduniapps.com/football',viewers:'18.2K', navigate: true},
      {id:3,name:'F1 Racing',category:'Sports',desc:'Formula 1 racing',thumb:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB3CAMAAADSMpnKAAAAaVBMVEX/////AQD/AAD/2Nj/GRn/aWn/Jib/9vb/Cgr/w8P//Pz/5OT/3Nz/6ur/+fn/UVH/8PD/Li7/Pz//V1f/d3f/srL/ubn/ZGT/bW3/Xl7/lZX/iYn/qan/f3//Ojr/pKT/ysr/np7/SUn5T2NHAAACrUlEQVR4nO2X6Y6jMAyAPWnLHW6GcrSlff+HnIQe2hKXiYFdaSV//ZcI1/kIjgPAMAzDMAzDMAzDMAzDMAzDMP8ncSrDKNqtBSBFx11yQlF/Kuvkds6c/TrEBeDmIePHmJRQWBViM74hvWHjR1JK8pTph77070ugvw/D5oTQnhKBTNQUT7LTCW3EwxMyTvI05MJCiaUpIXoIEoFMUDzF7XaWtvIUHISwUmJlSnuCAtmcJE/yvLUnN8E8HQie0mzqaY0pnRM0AploAvucImdTT57yVKz1JB2Ckl9N6ZyCWiATRE/4xljG3ocY90TISe6RdY94e2cB/runpymap8xYlU6oaXs/ki4h0IugQT1RaoHpSb2BNhpDBHEcuzRUFT4gBU8Uaz11EsAd+rZs8tzZe/YIUX3wRKmZIeJJbQp1NJ+9JZu8Mj1pUyIheNohnvIIgn78B+yTnGM8W9Z7coxuRyRSf9BL6tTo6Wh4UqtL7FNC91OSgswXlfexp8M9ERry0dPkDC9ckNmyzlPv8RLzdFvlSXl2dbuwQJN69gpQY54aiidTiGjiewuzwJTuM1FPlO8O86Rzytd4QkoexVOUGUJ0X/GHJ5Kpv+ZJneEp4smqZipPR8xTsczT6wyfenocWVZ89ESpmYgndccwPKmwp/7b/5Xhg6eE4GmXmUJKuNfM96W2llG1J/Pet9ZTiewn4VW2IUvUU2qf08TTeIafUE+DZcS7p+m9b/Q0dF07XMDt5hPEPKmcXNPTt+0yT5in25hG6ifhRUCfybkAhie1pm6VJ3h4er/3Pfe4PEB/9E9dOBNA9XQGbQDu2RileDLJn68rrOHqi2ouKVnWhwm1qntxNx1uBtuc+mYaUVG+vlrZQrXrouvs62MYhmEYhmEYhmEYhmEYhmEYhmH+AT/KYTGDu72/ZgAAAABJRU5ErkJggg==',live:true,streamUrl:'https://axtra.eduniapps.com/F1',viewers:'40.7K', navigate: true},
      
      // News channels - these will be embedded
      {id:11,name:'FRANCE 24 English',category:'News',desc:'International news coverage',thumb:'https://images.unsplash.com/photo-1529245019870-59c3d6f0b6f9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc',live:true,streamUrl:'https://www.youtube.com/embed/Ap-UM1O9RBU',viewers:'32.8K', navigate: false},
      {id:12,name:'NBC News',category:'News',desc:'Breaking news & analysis',thumb:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=def',live:false,streamUrl:'https://www.youtube.com/embed/wZuRLBIL9MI',viewers:'8.9K', navigate: false},
      {id:13,name:'DW News',category:'News',desc:'German international news',thumb:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi',live:true,streamUrl:'https://www.youtube.com/embed/LuKwFajn37U',viewers:'15.6K', navigate: false},
      {id:14,name:'ABC News',category:'News',desc:'American news network',thumb:'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=jkl',live:true,streamUrl:'https://www.youtube.com/embed/iipR5yUp36o',viewers:'12.4K', navigate: false},
      {id:15,name:'Citizen TV Kenya',category:'News',desc:'Kenyan news channel',thumb:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=mno',live:true,streamUrl:'https://www.youtube.com/embed/PGIalZd9WPs',viewers:'18.7K', navigate: false},
      {id:16,name:'NTV Kenya',category:'News',desc:'Kenyan television network',thumb:'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=pqr',live:false,streamUrl:'https://www.youtube.com/embed/CJcAxIxIJMo',viewers:'9.2K', navigate: false},
      {id:17,name:'Bloomberg Television',category:'News',desc:'Financial news network',thumb:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=stu',live:true,streamUrl:'https://www.youtube.com/embed/iEpJwprxDdk',viewers:'7.8K', navigate: false},
    
        // Cartoon channels - these will be embedded
      {id:4,name:'Disney Channel Animation',category:'Cartoon',desc:'Disney animated shows',thumb:'https://yt3.googleusercontent.com/_WcHGpEZpyOHL0SmNWyFyLe28xbIZ5W0-aOUKwcOTjJDsVThLsFQU2vMRIvZNpqWHganABXR=s120-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/8z_xyfgl3mM',viewers:'15.8K', navigate: false},
      {id:5,name:'Miraculous Ladybug',category:'Cartoon',desc:'Miraculous Ladybug episodes',thumb:'https://yt3.ggpht.com/ZQAwbEz2md0XdbHi96OUs-Wyco68dZ8hAtsICSY66vMRoewuKtjIXlHRRkj5f675XsDVKjC6=s48-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/mdwFQNvAj60',viewers:'21.3K', navigate: false},
      {id:6,name:'Emma And Joey',category:'Cartoon',desc:'Emma And Joey animated series',thumb:'https://yt3.ggpht.com/-hQXjM-M40eTezg2DdCjLdYqOA7j4Kr9UkGnj6aPU-Dq3sFqvER8umk3CJF-yVmRlyo5-pZiqA=s48-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/-VBxijFm50Y',viewers:'9.7K', navigate: false},
      {id:7,name:'Marvel HQ',category:'Cartoon',desc:'Marvel animated series',thumb:'https://yt3.ggpht.com/xAjIDPMqSE6Mzx5298eJHzpDnbaojpUj0kbBz5xQ6-VO468CAzlJtnuONZ-KCVR4BJw2MXf8pg=s48-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/2PzfL3zrE-o',viewers:'8.4K', navigate: false},
      {id:8,name:'SpongeBob SquarePants',category:'Cartoon',desc:'SpongeBob SquarePants episodes',thumb:'https://yt3.ggpht.com/6yMNewCNOr6s-jh-DjxrnFErmOS9VjfzDuQNbzfhfBap2hNtxxrQ1rzhtvkiZerWptcA-eGF5bs=s48-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/kzcUBov6QBI',viewers:'7.1K', navigate: false},
      {id:9,name:'Disney Jr.',category:'Cartoon',desc:'Disney Junior shows',thumb:'https://yt3.ggpht.com/ycmH6u_8GXdVOSwL8K8D0QSLxzoJvd6yiRORWT0QYosXdtBBOkqQdXTR4DS6kDHd-U49Z3dcpHY=s48-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/FPAVYRiJb84',viewers:'11.5K', navigate: false},
      {id:10,name:'Total Drama',category:'Cartoon',desc:'Total Drama animated series',thumb:'https://yt3.ggpht.com/mRcylZLFCVtP78LA6_L7JSMwN2U87MwAX_ND9TwvQR3SLkRBe6-XFhOWKsf3nWW-75AJBRKhoA=s48-c-k-c0x00ffffff-no-rj',live:true,streamUrl:'https://www.youtube.com/embed/Q0zx1vpTghg',viewers:'5.3K', navigate: false},
      
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
